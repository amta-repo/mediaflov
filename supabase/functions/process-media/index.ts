import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fileData, mediaType, operation } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    let systemPrompt = '';
    let userPrompt = '';

    // Determine prompts based on media type and operation
    switch (mediaType) {
      case 'image':
        systemPrompt = 'You are an expert image processing assistant. Analyze images and provide detailed insights.';
        userPrompt = `Analyze this image and provide: 1) A detailed description, 2) Key elements and colors, 3) Suggested improvements or use cases. Operation: ${operation}`;
        break;
      case 'video':
        systemPrompt = 'You are an expert video processing assistant. Help with video analysis and recommendations.';
        userPrompt = `Provide analysis for video processing. Suggest: 1) Optimal formats, 2) Compression strategies, 3) Quality improvements. Operation: ${operation}`;
        break;
      case 'audio':
        systemPrompt = 'You are an expert audio processing assistant. Analyze audio characteristics and provide recommendations.';
        userPrompt = `Analyze audio file and provide: 1) Format recommendations, 2) Quality optimization tips, 3) Use case suggestions. Operation: ${operation}`;
        break;
      default:
        systemPrompt = 'You are a helpful media processing assistant.';
        userPrompt = `Analyze this media file and provide helpful insights. Operation: ${operation}`;
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
      }),
    });

    if (response.status === 429) {
      return new Response(
        JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), 
        {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    if (response.status === 402) {
      return new Response(
        JSON.stringify({ error: 'AI service requires additional credits.' }), 
        {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const analysis = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ 
        success: true, 
        analysis,
        mediaType,
        operation 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in process-media function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        success: false 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});