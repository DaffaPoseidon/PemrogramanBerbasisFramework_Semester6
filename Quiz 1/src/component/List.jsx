import React from "react";

export default function List({ data, handleEdit, handleDelete }) {
  return (
    <div className="list-group">
      {data.map((data, index) => {
        return (
          <div key={index} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1">{data.nim}</h6>
              <h5 className="mb-1">{data.name}</h5>
              <div>
                <button
                  onClick={() => handleEdit(data.id)}
                  className="btn btn-sm btn-link"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(data.id)}
                  className="btn btn-sm btn-link"
                >
                  Del
                </button>
              </div>
            </div>
            <p className="mb-1">{data.telp}</p>
            <p className="mb-1">{data.angkatan}</p>
            <p className="mb-1">{data.alamat}</p>
            <p className="mb-1">{data.kerja}</p>
          </div>
        );
      })}
    </div>
  );
}
