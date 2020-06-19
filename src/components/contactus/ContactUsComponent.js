import { React } from '../../libraries';
import { TitleDescComponent } from '../../components';
import contactusImage from '../../assets/images/img_contact.png';

export const ContactUsComponent = () => {
    return(
        <>
            <div className="pt-10 pb-10">
                <TitleDescComponent title="Hubungi Kami" description="" />
                <div className="w-full grid grid-cols-6 mt-10">
                    <div className="col-span-3 pr-10">
                        <img src={contactusImage} alt="Contactus" className="w-full" />
                    </div>
                    <div className="col-span-3 flex items-stretch text-left">
                        <div className="flex-1">
                            <p className="font-bold">Apakah ada pertanyaan?</p>
                            <div className="form-group mt-10">
                                <div className="w-full mb-6">
                                    <p className="mb-4 text-orange-400">Subject</p>
                                    <input name="subject" className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight outline-none shadow-none focus:shadow-none" />
                                </div>
                                <div className="w-full mb-6">
                                    <p className="mb-4 text-orange-400">Email</p>
                                    <input name="subject" className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight outline-none shadow-none focus:shadow-none" />
                                </div>
                                <div className="w-full mb-6">
                                    <p className="mb-4 text-orange-400">Pesan</p>
                                    <textarea name="subject" className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight outline-none shadow-none focus:shadow-none h-40 resize-none"></textarea>
                                </div>
                                <div className="w-full">
                                    <button className="bg-black hover:bg-blue-700 text-sm text-white font-bold py-3 px-10 rounded">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}