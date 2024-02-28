import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
import ThankYou from "../../components/4-thankYou/ThankYou";

export default function Contact() {
  const [state, handleSubmit] = useForm("mnqejapp");
  if (state.succeeded) {
    return <ThankYou />;
  }

  return (
    <section className="contact">
      <section className="left-side">
        <div className="text">
          <h2>Get In Touch</h2>
          <p>
            Feel free to reach out to me using the contact form below or through
            the provided email address.
          </p>
          <br />
          <span className="soon">
            I will make sure to respond to your inquiry as soon aspossible.
          </span>
        </div>
        <form onSubmit={handleSubmit} className="form flex">
          <input
            type="text"
            name="name"
            className="username"
            placeholder="Your Name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Your Email"
            autoComplete="off"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            name="message"
            className="message"
            placeholder="Write A Message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button disabled={state.submitting} type="submit" className="send">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>
      <section className="right-side"></section>
    </section>
  );
}

// import { useState } from "react";
// import { Form } from "react-router-dom";
// import { loginUser } from "../../api";
// import "./contact.css";
// export async function action({ request }) {
//   const formData = await request.formData();
//   const email = formData.get("email"); // Must Have The Same Name As Name In Input
//   const name = formData.get("name"); // Must Have The Same Name As Name In Input
//   const textarea = formData.get("message");
//   try {
//     const data = await loginUser({ email, name, textarea });
//   } catch (err) {
//     return err.message;
//   }
// }

// export default function Contact() {
//   const [message, setMessage] = useState(false);

//   function thankYou() {
//     setMessage(true);
//   }

//   return (
//     <section className="contact">
//       <section className="left-side">
//         <div className="text">
//           <h2>Get In Touch</h2>
//           <p>
//             Feel free to reach out to me using the contact form below or through
//             the provided email address.
//           </p>
//           <br />
//           <span className="soon">
//             I will make sure to respond to your inquiry as soon aspossible.
//           </span>
//         </div>
//         <Form method="post" className="form flex">
//           <input
//             type="text"
//             name="name"
//             className="username"
//             placeholder="Your Name"
//             autoComplete="off"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             className="email"
//             placeholder="Your Email"
//             autoComplete="off"
//             required
//           />
//           <textarea
//             name="message"
//             className="message"
//             placeholder="Write A Message"
//             required
//           ></textarea>
//           <button onClick={thankYou} type="submit" className="send">
//             Submit
//           </button>
//         </Form>
//         {message && (
//           <span className="thanks">Thank You For Your Interest !</span>
//         )}
//       </section>
//       <section className="right-side"></section>
//     </section>
//   );
// }

// function handleSubmit(event) {
//   event.preventDefault(); // Prevent the default form submission behavior

//   thankYou();

// const form = event.target;
// const formData = new FormData(form);

//   fetch("https://formspree.io/f/mnqejapp", {
//     method: "POST",
//     body: formData,
//     headers: {
//       Accept: "application/json",
//     },
//   }).then((response) => {
//     if (!response.ok) {
//       throw {
//         message: "Failed To Send",
//         statusText: response.statusText,
//         status: response.status,
//       };
//     }
//   });
// }

//   <form
//     id="newForm"
//     method="POST"
//     action="https://formspree.io/f/mnqejapp"
//     className="flex"
//     onSubmit={handleSubmit} // Call handleSubmit function on form submission
//   >
//     <input
//       className="name"
//       type="text"
//       placeholder="Your Name"
//       name="name"
//       required
//     />
//     <input
//       className="email"
//       type="email"
//       placeholder="Your Email"
//       name="_replyto"
//     />
//     <textarea
//       className="message"
//       name="message"
//       placeholder="Write A Message"
//     ></textarea>
//     <button type="submit" className="submit" name="send">
//       Send
//     </button>
//   </form>
