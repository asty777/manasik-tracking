import React, { Component } from "react";
import Layout from "../components/LayoutComponent";
import { Button, Input } from "@material-tailwind/react";
import { AiFillPlusCircle } from "react-icons/ai";
import TableJemaah from "../components/Tables/TableJemaah";
import TambahJamaah from "../components/Modals/TambahJamaah";

export default class JemaahPage extends Component {
  state = {
    isModalOpen: false
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div>
        <Layout>
          <div className="m-3">
            <div className="flex gap-3">
              <Input label="Cari" />
              <Button className="bg-black w-[150px] rounded-full">Cari</Button>
              <Button className="bg-black w-[300px] flex rounded-full" onClick={this.openModal}>
                <AiFillPlusCircle />
                Tambah Data Jemaah
              </Button>
            </div>
            <TableJemaah />
          </div>
        </Layout>
        {isModalOpen && <TambahJamaah isOpen={isModalOpen} onClose={this.closeModal} />}
      </div>
    );
  }
}


