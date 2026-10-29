// Receives enquiry / review / comment form submissions.
// TODO: forward to email or CRM (e.g. via nodemailer / Resend) — currently only logged.
export async function POST(request) {
  const data = await request.json().catch(() => null);
  if (!data) return Response.json({ ok: false }, { status: 400 });
  console.log("New form submission:", data);
  return Response.json({ ok: true });
}
