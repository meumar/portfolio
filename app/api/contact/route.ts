import sendGrid from "@sendgrid/mail";

const { SEND_GRID_KEY, FROM_EMAIL } = process.env;

sendGrid.setApiKey(`${SEND_GRID_KEY}`);

interface mailBody {
  to: string;
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
  const { name, email, phone, message, subject } = await req.json();

  await sendMail({
    to: "umarsheik.nimble@gmail.com",
    subject: "From portfolio " + subject,
    text: message,
    html: `<div style="text-align: center">
    <p>name: ${name} </p>
    <p>Sender: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>${message}</p>
    </div>`,
  });

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
