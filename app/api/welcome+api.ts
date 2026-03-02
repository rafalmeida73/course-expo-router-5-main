const key = process.env.SIMONS_KEY;

export async function GET(request: Request) {
  const name = new URL(request.url).searchParams.get('name');

  return Response.json({
    welcome: `Hello ${name}! The magic key is ${key}`,
  });
}
