import {
    Mail, Folder, Stamp, Send,
} from "lucide-react";
import { notifySuccess, notifyError } from "../shared/notify";
import { useState } from "react";
import sendMail from "./email";
export default function Contact() {

    const [name, setName] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("trigger")
        setLoading(true);
        try {
            await sendMail(name, email, message);
            notifySuccess("Message Sent Successfully");
            setLoading(false);
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            console.log(err);
            notifyError("Failed to send message");
            setLoading(false);
        }
    }

    return (
        <section id="contact" className="px-4 sm:px-6 md:px-16 py-16 bg-white dark:bg-slate-950">

            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">

                    <p className="text-orange-500 tracking-[0.3em] uppercase text-sm font-medium">
                        Contact
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        Let’s Work Together
                    </h2>

                    <p className="dark:text-slate-400 text-gray-600 mt-5 max-w-2xl mx-auto leading-relaxed">
                        Have a project idea, freelance opportunity, or just want to connect?
                        Feel free to reach out. I’m always open to discussing new ideas and collaborations.
                    </p>

                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* LEFT SIDE */}
                    <div className="space-y-6">

                        {/* Card */}
                        <div className="rounded-3xl border border-slate-800 dark:bg-slate-900 bg-gray-200 p-6">

                            <h3 className="text-2xl font-semibold mb-6">
                                Contact Information
                            </h3>

                            {/* Email */}
                            <div className="flex items-center gap-4 mb-6">

                                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                                    <Mail className="text-orange-500" size={22} />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-400">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:yourmail@gmail.com"
                                        className="hover:text-orange-400 transition"
                                    >
                                        yourmail@gmail.com
                                    </a>
                                </div>

                            </div>

                            {/* GitHub */}
                            <div className="flex items-center gap-4 mb-6">

                                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                                    <Stamp className="text-orange-500" size={22} />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-400">
                                        GitHub
                                    </p>

                                    <a
                                        href="https://github.com/afrid07"
                                        target="_blank"
                                        className="hover:text-orange-400 transition"
                                    >
                                        github.com/afrid07
                                    </a>
                                </div>

                            </div>

                            {/* LinkedIn */}
                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                                    <Folder className="text-orange-500" size={22} />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-400">
                                        LinkedIn
                                    </p>

                                    <a
                                        href="#"
                                        target="_blank"
                                        className="hover:text-orange-400 transition"
                                    >
                                        linkedin.com/in/yourprofile
                                    </a>
                                </div>

                            </div>

                        </div>

                        {/* Small Quote Card */}
                        <div className="rounded-3xl border border-slate-800 dark:bg-slate-900 bg-gray-200 p-6">

                            <p className="text-lg leading-relaxed dark:text-slate-300 text-gray-600">
                                “I enjoy building modern, scalable, and responsive web applications
                                focused on performance and user experience.”
                            </p>

                        </div>

                    </div>


                    <div className="rounded-3xl border border-slate-800 dark:bg-slate-900 bg-gray-200 p-6">

                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message
                        </h3>

                        <form className="space-y-5" onSubmit={handleSubmit}>

                            {/* Name */}
                            <div>

                                <label className="text-sm dark:text-slate-400 text-gray-600 block mb-2">
                                    Your Name
                                </label>

                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Afrid Khan"
                                    value={name}
                                    required
                                    className="
                                        w-full
                                        rounded-xl
                                        border border-slate-700
                                        dark:bg-slate-950
                                        px-4 py-3
                                        outline-none
                                        focus:border-orange-500
                                        transition
                                    "
                                />

                            </div>

                            {/* Email */}
                            <div>

                                <label className="text-sm dark:text-slate-400 text-gray-600 block mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="youremail@gmail.com"
                                    value={email}
                                    className="
                                        w-full
                                        rounded-xl
                                        border border-slate-700
                                        dark:bg-slate-950
                                        px-4 py-3
                                        outline-none
                                        focus:border-orange-500
                                        transition
                                    "
                                />

                            </div>

                            {/* Message */}
                            <div>

                                <label className="text-sm dark:text-slate-400 text-gray-600 block mb-2">
                                    Message
                                </label>

                                <textarea
                                    rows={6}
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Tell me about your project..."
                                    className="
                                        w-full
                                        rounded-xl
                                        border border-slate-700
                                        dark:bg-slate-950
                                        px-4 py-3
                                        outline-none
                                        resize-none
                                        focus:border-orange-500
                                        transition
                                    "
                                />

                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`
                                    flex items-center justify-center gap-2
                                    cursor-pointer
                                    w-full
                                    rounded-xl
                                    ${loading ? "opacity-50 cursor-not-allowed" : ""}
                                    bg-orange-500
                                    py-3
                                    font-semibold
                                    text-black
                                    hover:bg-orange-400
                                    transition duration-300
                                `}
                            >

                                <Send size={18} />

                                Send Message

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}