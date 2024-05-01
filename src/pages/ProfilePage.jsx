import React, { Component} from "react";
import Layout from "../components/LayoutComponent";
import { Button } from "@material-tailwind/react";
import EditProfile from "../components/Modals/EditProfile";
import UbahPassword from "../components/Modals/UbahPassword";


export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditProfileOpen: false,
      isUbahPasswordOpen: false 
    };
  }
 

  render() {
    const { isEditProfileOpen, isUbahPasswordOpen } = this.state;
    return (
      <div>
        <Layout>
          <div className="m-5 flex flex-col md:flex-row md:gap-10">
            <div className="h-32 w-32 bg-black rounded-full "></div>
            <div className="flex flex-col gap-3 md:order-1">
              <div>
                <label className="text-xs">Nama Pengguna:</label>
                <h3 className="font-bold">Asep Tour and Travel</h3>
              </div>
              <div>
                <label className="text-xs">Email Pengguna:</label>
                <h3 className="font-bold">Asep Tour and Travel</h3>
              </div>
              <div>
                <label className="text-xs">Alamat:</label>
                <h3 className="font-bold">Asep Tour and Travel</h3>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:order-3">
              <div>
                <label className="text-xs">Nomor Telepon:</label>
                <h3 className="font-bold">Asep Tour and Travel</h3>
              </div>
              <div>
                <label className="text-xs">Asal Instansi:</label>
                <h3 className="font-bold">Asep Tour and Travel</h3>
              </div>
            </div>
          </div>
          <div className="m-5 flex gap-10">
            <div className="w-32 hidden md:block"></div>
            <div className="flex flex-col md:flex-row md:gap-2">
               <Button
                className="bg-gr text-black rounded-full"
                size="sm"
                onClick={() => this.setState({ isEditProfileOpen: true })}
              >
                Edit
              </Button>
              <Button
                className="bg-black rounded-full mt-2 md:mt-0"
                size="sm"
                onClick={() => this.setState({ isUbahPasswordOpen: true })} 
              >
                Ubah Password
              </Button>

            </div>
          </div>
        </Layout>
        {isEditProfileOpen && (
          <EditProfile
            isOpen={isEditProfileOpen}
            onClose={() => this.setState({ isEditProfileOpen: false })}
          />
        )}
        {isUbahPasswordOpen && (
          <UbahPassword
            isOpen={isUbahPasswordOpen}
            onClose={() => this.setState({ isUbahPasswordOpen: false })} 
          />
        )}
      </div>
    );
  }
}
