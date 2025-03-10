import ContactDetail from "../_components/ContactDetail";
import ContactForm from "../_components/ContactForm";

export const metadata = {
    title: "Contact Us",
  };

  export default function Page() {
    return (<main>
        <div className="flex justify-center items-center h-[420px] bg-[url('../public/main3.jpg')] bg-cover bg-center text-center">
            <h1 className="text-[50px] font-bold text-basic-50">Contact Us</h1>
        </div>
        <div className="flex justify-between items-center flex-wrap h-[800px] mx-base">
          <ContactForm />
          <div className="h-[625px] w-[625px] bg-[url('../public/main4.jpg')] bg-cover bg-center">
            <div className="flex justify-between h-full backdrop-blur-sm bg-gradient-to-t from-basic-600/50 to-basic-50/10">
              <ContactDetail p1="Vinewood Hills, Los Santos" p2="3671 Whispymound Drive">Address</ContactDetail>
              <ContactDetail p1="328-555-0156" p2="273-555-0136">Phone</ContactDetail>
              <ContactDetail p1="trev@eyefind.info" p2="Frankie@eyefind.info">Email</ContactDetail>
            </div>
          </div>
        </div>
    </main>)
  }