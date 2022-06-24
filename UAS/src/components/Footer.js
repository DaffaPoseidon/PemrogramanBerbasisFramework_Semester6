import React from 'react'
import "./style.css";

function Footer() {
  return (
    <>
    {/* <!-- Contact--> */}
    <section className="contact-section bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fab fa-xbox text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">X-BOX</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <a href="#!">Beli Sekarang!</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fab fa-playstation text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Playstation</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <a href="#!">Beli Sekarang!</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-desktop text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">PC</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <a href="#!">Beli Sekarang!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="social d-flex justify-content-center" id="contact-nier">
            <a className="mx-2" href="https://twitter.com/NieRGame?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fab fa-twitter"></i></a>
            <a className="mx-2" href="https://www.facebook.com/NIERGame"><i className="fab fa-facebook-f"></i></a>
            <a className="mx-2" href="https://github.com/DaffaPoseidon/PemrogramanBerbasisFramework_Semester6/tree/main/UAS"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="footer bg-black small text-center text-white-50">
        <div className="container">Copyright Daffa, Tio, Hafiz</div>
      </footer>
    </>
)
}

export default Footer