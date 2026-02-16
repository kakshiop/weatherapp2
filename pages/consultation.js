import Link from "next/link";

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] px-6 py-10 text-[#f6f1eb] md:px-10">
      <section className="mx-auto w-full max-w-3xl rounded-2xl border border-[#2b2b2b] bg-[#151515] p-8 shadow-2xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#b89b7a]">Luxora Interiors</p>
            <h1 className="mt-2 text-3xl font-semibold">Book a Consultation</h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-[#3c3c3c] px-4 py-2 text-sm transition hover:border-[#b89b7a]"
          >
            Back to Home
          </Link>
        </div>

        <p className="mb-8 text-sm leading-6 text-[#cec5ba]">
          Tell us about your space and goals. Our design team will contact you within 24 hours with a personalized
          consultation plan.
        </p>

        <form className="grid gap-5" action="#" method="post">
          <label className="grid gap-2 text-sm">
            Full Name
            <input
              type="text"
              name="name"
              required
              className="rounded-lg border border-[#2d2d2d] bg-[#0f0f0f] px-4 py-3 outline-none transition focus:border-[#b89b7a]"
              placeholder="John Doe"
            />
          </label>

          <label className="grid gap-2 text-sm">
            Email Address
            <input
              type="email"
              name="email"
              required
              className="rounded-lg border border-[#2d2d2d] bg-[#0f0f0f] px-4 py-3 outline-none transition focus:border-[#b89b7a]"
              placeholder="john@example.com"
            />
          </label>

          <label className="grid gap-2 text-sm">
            Project Type
            <select
              name="projectType"
              className="rounded-lg border border-[#2d2d2d] bg-[#0f0f0f] px-4 py-3 outline-none transition focus:border-[#b89b7a]"
              defaultValue=""
            >
              <option value="" disabled>
                Select a project type
              </option>
              <option value="residential">Residential Interior</option>
              <option value="commercial">Commercial Space</option>
              <option value="renovation">Renovation & Styling</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm">
            Message
            <textarea
              name="message"
              rows={5}
              className="rounded-lg border border-[#2d2d2d] bg-[#0f0f0f] px-4 py-3 outline-none transition focus:border-[#b89b7a]"
              placeholder="Share your ideas, timeline, and budget range..."
            />
          </label>

          <button
            type="submit"
            className="mt-2 w-fit rounded-full bg-[#b89b7a] px-6 py-3 text-sm font-semibold text-[#0f0f0f] transition hover:opacity-90"
          >
            Submit Request
          </button>
        </form>
      </section>
    </main>
  );
}
