import React from "react";

function Restaurant(props) {
  return (
    <div>
      <h1 className="text-center">Restaurant</h1>
      <table className="table border">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Restaurant name</th>
            <th scope="col">Ovqat nomlari</th>
            <th scope="col">Location</th>
            <th scope="col">Food img</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mahmud kabab</td>
            <td>Faast food</td>
            <td>Qatortol</td>
            <td>Food img</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mahmud kabab</td>
            <td>Faast food</td>
            <td>Qatortol</td>
            <td>Food img</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mahmud kabab</td>
            <td>Faast food</td>
            <td>Qatortol</td>
            <td>Food img</td>
          </tr>
        </tbody>
      </table>

      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Restaurant
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div>
              <h1 className="text-center">Restaurant page</h1>
              <div className="form-control">
                <input
                  className="form-control mb-2"
                  type="text"
                  placeholder="Restaurant name"
                />
                <select className="form-control mb-2" name="" id="">
                  <option value="">Ovqat nomlari</option>
                  <option value="">Ovqat nomlari</option>
                  <option value="">Ovqat nomlari</option>
                  <option value="">Ovqat nomlari</option>
                </select>
                <input
                  className="form-control mb-2"
                  type="text"
                  placeholder="Location"
                />
                <span>Food img</span>
                <input
                  type="file"
                  className="form-control mb-2"
                  id="customFile"
                />
                <span>Logo brand</span>
                <input
                  type="file"
                  className="form-control mb-2"
                  id="customFile"
                />
                <div className="d-flex justify-content-end">
                  <button className="btn">Done</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
