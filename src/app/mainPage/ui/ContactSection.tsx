import {ContactUsButton} from "@/shared/ui";

export default function ContactSection () {
    return (
        <section className='section container m-auto p-18 flex flex-col items-center justify-center '>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Less important title
            </h2>
            <ContactUsButton/>
        </section>
    )
}