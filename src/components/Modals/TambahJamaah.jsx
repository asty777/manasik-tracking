import { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { MdMyLocation } from "react-icons/md"
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";

const TambahJamaah = ({ isOpen, onClose }) => {
    const [visible, setVisible] = useState(false);

  const handleVisible = () => setVisible(!visible);

  const handleClose = () => {
    onClose();
  };

    return(
        <Dialog
        open={isOpen}
        size="sm"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody>
        <IoIosCloseCircleOutline  className="cursor-pointer w-7 h-7 float-end text-black" onClick={handleClose} />
          <h1 className="text-black font-bold text-xl tracking-wider mb-2">
            Tambahkan Data
          </h1>
          <p className=" text-sm text-black">Masukan Detail Pengguna untuk menambahkan data</p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col relative">
                <input 
                    className="bg-gray-50 mt-2 border-2 border-blue text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-full pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500" 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Nama Lengkap" 
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 pointer-events-none">
                    <FaUser className="text-gray-900" />
                </span>
            </div>
            <div className="flex flex-col relative">
                <input 
                    className="bg-gray-50 mt-2 border-2 border-blue text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-full pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500" 
                    type="text" 
                    id="jenis kelamin" 
                    name="jenis kelamin" 
                    placeholder="Jenis Kelamin" 
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 pointer-events-none">
                    <MdOutlineArrowDropDownCircle  className="text-gray-900" />
                </span>
            </div>
            <div className="flex flex-col relative">
                <input 
                    className="bg-gray-50 mt-2 border-2 border-blue text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-full pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500" 
                    type="text" 
                    id="alamat" 
                    name="alamat" 
                    placeholder="Alamat" 
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 pointer-events-none">
                    <MdMyLocation className="text-gray-900" />
                </span>
            </div>
            <div className="flex flex-col relative">
                <input 
                    className="bg-gray-50 mt-2 border-2 border-blue text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-full pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500" 
                    type="text" 
                    id="email" 
                    name="email" 
                    placeholder="E-mail" 
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 pointer-events-none">
                    <MdOutlineMailOutline  className="text-gray-900" />
                </span>
            </div>
            <div className="flex flex-col relative">
                <input 
                    className="bg-gray-50 mt-2 border-2 border-blue text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-full pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500" 
                    type="text" 
                    id="password" 
                    name="password" 
                    placeholder="Password" 
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 pointer-events-none">
                    <MdOutlinePassword  className="text-gray-900" />
                </span>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
        <Button className="bg-black w-full rounded-full">Tambah</Button>
        </DialogFooter>
      </Dialog>
    );
}

export default TambahJamaah;
