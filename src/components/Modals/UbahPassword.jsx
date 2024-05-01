import { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { IoIosCloseCircleOutline } from "react-icons/io";


const UbahPassword = ({ isOpen, onClose }) => {
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
            Ubah Password
          </h1>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
                <input 
                    className="bg-gray-50 mt-2 border-2 border-blue text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-full pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500" 
                    type="text" 
                    id="OldPass" 
                    name="OldPass" 
                    placeholder="Password Lama" 
                />
            </div>
            <div className="flex flex-col">
                <input 
                    className="bg-gray-50 mt-2 border-2 border-blue text-gray-900 text-sm placeholder-black placeholder-opacity-100 rounded-full pr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500" 
                    type="text" 
                    id="NewPass" 
                    name="NewPass" 
                    placeholder="Password Baru" 
                />
            </div>
            
          </div>
        </DialogBody>
        <DialogFooter>
        <Button className="bg-black w-full rounded-full">Simpan</Button>
        </DialogFooter>
      </Dialog>
    );
}

export default UbahPassword;