import List from "./List";
import { useState, useEffect } from "react";
import { uid } from "uid";
import axios from "axios";

let api = axios.create({ baseURL: "http://localhost:3000" });

function dataList(){

    const [data, setData] = useState([]);
    
    const [isUpdate, setIsUpdate] = useState({id: null, status: false});
    
    const [formData, setFormData] = useState({
        nim: "",
        name: "",
        telp: "",
        angkatan: "",
        alamat: "",
        kerja: "",
    })

    useEffect(() => {
      api.get("/data").then((res) => {
        setData(res.data);
      });
    },
    []);

    function handleChange(e) {
      let newFormState = { ...formData };
      newFormState[e.target.name] = e.target.value;
      setFormData(newFormState);
    }

    function handleSubmit(e) {
      e.preventDefault();
      let data = [...data];
    
      if (formData.nim === ""){
        return false;
      }
      if (formData.name === ""){
        return false;
      }
      if (formData.telp === ""){
        return false;
      }
      if (formData.angkatan === ""){
        return false;
      }
      if (formData.alamat=== ""){
        return false;
      }
      if (formData.kerja=== ""){
        return false;
      }

      if (isUpdate.status) {
        data.forEach((data) => {
          if(data.id === isUpdate.id) {
            data.nim = formData.nim;
            data.name = formData.name;
            data.telp = formData.telp;
            data.angkatan = formData.angkatan;
            data.alamat = formData.alamat;
            data.kerja = formData.kerja;
          }
        });
        api
          .put("/data/" + isUpdate.id, {
            id: isUpdate.id,
            nim: formData.nim,
            name: formData.name,
            telp: formData.telp,
            angkatan: formData.angkatan,
            alamat: formData.alamat,
            kerja: formData.kerja,
          })
          .then(() => {
            alert("Data berhasil di update");
          });
      } else {
        let toSave = {
          id: uid(),
          nim: formData.nim,
          name: formData.name,
          telp: formData.telp,
          angkatan: formData.angkatan,
          alamat: formData.alamat,
          kerja: formData.kerja,
        };
        data.push(toSave);

        api.post("/data", toSave).then(() => {
          alert("Data berhasil ditambahkan");
        });
      }
      setData(data);
      setIsUpdate(false);
      setFormData({ nim: "", name: "", telp: "", angkatan: "", alamat: "", kerja: ""});
    }

    function handleEdit(id) {
      // cari data di state
      // isi data ke state form
      let data = [...data];
      let foundData = data.find((data) => data.id === id);
      setIsUpdate({ status: true, id: id });
      setFormData({ nim: foundData.nim, name: foundData.name, telp: foundData.telp, 
        angkatan: foundData.angkatan, alamat: foundData.alamat, kerja: foundData.kerja });
    }
  
    function handleDelete(id) {
      let data = [...data];
      let filteredData = data.filter((data) => data.id !== id);
  
      // menghapus data
      api.delete("/contacts/" + id).then(() => alert("Data berhasil dihapus"));
      setData(filteredData);
    }

    return (
        <div className="dataList">
            <div className="fixed-top bg-white pb-3 mx-auto" style={{ width: 400 }}>
        <h1 className="px-3 py-3 font-weight-bold">Data List Mahasiswa</h1>
        <form onSubmit={handleSubmit} className="px-3 py-4">
        <div className="form-group">
            <label htmlFor="">NIM</label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control"
              value={formData.nim}
              name="nim"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Nama</label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control"
              value={formData.name}
              name="name"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="">No. Telp</label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.telp}
              className="form-control"
              name="telp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Angkatan</label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control"
              value={formData.angkatan}
              name="angkatan"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Alamat</label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control"
              value={formData.alamat}
              name="alamat"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Pembagian Kerja</label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control"
              value={formData.kerja}
              name="kerja"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Save
            </button>
          </div>
        </form>
      </div>
      <div style={{ marginTop: 350 }}>
        <List
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          data={data}
        />
      </div>
        </div>
    )
}

export default dataList;