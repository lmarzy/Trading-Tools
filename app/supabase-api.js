function getSupabaseFunctionUrl(functionName) {
  return `${window.SUPABASE_CONFIG.url.replace(/\/$/, "")}/functions/v1/${functionName}`;
}

async function callSupabaseFunction(functionName, body = {}, extraHeaders = {}) {
  if (!window.SUPABASE_CONFIG?.url || !window.SUPABASE_CONFIG?.publishableKey) {
    throw new Error("Supabase is not configured.");
  }

  const response = await fetch(getSupabaseFunctionUrl(functionName), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: window.SUPABASE_CONFIG.publishableKey,
      Authorization: `Bearer ${window.SUPABASE_CONFIG.publishableKey}`,
      ...extraHeaders,
    },
    body: JSON.stringify(body),
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.error || "Supabase request failed.");
  }

  return result;
}
