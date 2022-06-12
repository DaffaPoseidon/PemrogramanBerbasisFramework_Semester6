import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {

  const [data, setData] = useState(Cardsdata);
  // console.log(data);


  const dispatch = useDispatch();


  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  }

  return (
    <>
      <div className='container mt-3'>
        <h2 className='text-center'>Add to Cart Projects</h2>

        <div className="row d-flex justify-content-center align-items-center">
          {
            data.map((element, id) => {
              return (
                <>
                  <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                    <Card.Img variant="top" src={element.imgdata} style={{ height: "26rem" }} className="mt-3" />
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>
                        Price : ₹ {element.price}
                      </Card.Text>
                      <div className="button_div d-flex justify-content-center">
                        <Button variant="primary"
                          onClick={() => send(element)}
                          className='col-lg-12'>Add to Cart</Button>
                      </div>

                    </Card.Body>
                  </Card>
                </>
              )
            })
          }

        </div>
      </div>
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
          <div className="social d-flex justify-content-center">
            <a className="mx-2" href="https://twitter.com/NieRGame?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fab fa-twitter"></i></a>
            <a className="mx-2" href="https://www.facebook.com/NIERGame"><i className="fab fa-facebook-f"></i></a>
            <a className="mx-2" href="https://github.com/DaffaPoseidon/PemrogramanBerbasisFramework_Semester6/tree/main/UAS"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="footer bg-black small text-center text-white-50">
        <div className="container">Copyright Daffa, Tio, Hafizh</div>
      </footer>
    </>
  )
}

export default Cards