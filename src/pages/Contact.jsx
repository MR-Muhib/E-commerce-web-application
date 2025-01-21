import IntroduceApplication from "../components/applicationInfo/IntroduceApplication";
import ContactBanner from "../components/contactPage/ContactBanner";
import ContactForm from "../components/contactPage/ContactForm";
import ContactHeader from "../components/contactPage/ContactHeader";
import ContactLocation from "../components/contactPage/ContactLocation";

const Contact = () => {
  return (
    <>
      <div className="">
        <ContactBanner />
        <ContactHeader />

        <div className="container mx-auto sm:flex justify-around mb-5 p-5">
          <ContactLocation />
          <ContactForm />
        </div>
      </div>

      {/* product quality and over view  */}
      <IntroduceApplication />
    </>
  );
};

export default Contact;
