import sendGrid from "@sendgrid/mail";

const { SEND_GRID_KEY, FROM_EMAIL, TO_EMAIL } = process.env;

sendGrid.setApiKey(`${SEND_GRID_KEY}`);

interface mailBody {
  to: any;
  from?: string;
  subject: string;
  text: string;
  html: string;
}

const sendMail = async (body: mailBody) => {
  try {
    try {
      await sendGrid.send({ ...body, ...{ from: `${FROM_EMAIL}` } });
    } catch (error: any) {
      return null;
    }
  } catch (e) {
    return null;
  }
};

export async function POST(req: Request) {
  const { email } = await req.json();

  await sendMail({
    to: TO_EMAIL,
    subject: "From portfolio ",
    text: "Someone is trying reach you",
    html: `<div style="text-align: center">
    <p>${email} is trying reach you</p>
    </div>`,
  });

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
