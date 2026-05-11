"use client";

export default function NewsletterForm() {
  return (
    <form className="nl-form" onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="your@email.com" />
      <button className="btn btn-accent btn-sm" type="submit">Subscribe</button>
    </form>
  );
}
