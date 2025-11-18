export const metadata = { title: "Contact - AZ McKee Realty" };
export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-charcoal mb-2">Let's talk about your next move</h1>
      <p className="text-muted max-w-[60ch]">Tell us a bit about your goals. We will reach out to schedule a call.</p>
      <form method="POST" action="mailto:hello@azmckeerealty.com" encType="text/plain" className="grid gap-3 max-w-xl mt-4">
        <label className="text-sm"> Full Name <br/><input required name="name" className="w-full px-3 py-2 rounded-lg border border-gray600 bg-white" /></label>
        <label className="text-sm"> Email <br/><input required type="email" name="email" className="w-full px-3 py-2 rounded-lg border border-gray600 bg-white" /></label>
        <label className="text-sm"> Phone <br/><input name="phone" className="w-full px-3 py-2 rounded-lg border border-gray600 bg-white" /></label>
        <label className="text-sm"> Message <br/><textarea required name="message" rows={5} className="w-full px-3 py-2 rounded-lg border border-gray600 bg-white"></textarea></label>
        <button className="btn btn-primary" type="submit">Send</button>
      </form>
      <p className="text-sm text-muted mt-2">Tip: Replace the form action with your API endpoint (SES + API Gateway + Lambda) for production.</p>
    </div>
  ); }
