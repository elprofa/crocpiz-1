import React from 'react';
import styled from "styled-components";
import { 
    Row, 
    Col, 
    CardImg,
    Container, 
    CardFooter, 
    Card, 
    Button, 
    CardHeader, 
    CardBody,
    CardTitle, 
    CardText } from 'reactstrap';
import MenuPizzaStc from './menuPizza.stc';

const Wrapper = styled.div`
  .row {
    margin: 0px;
  }

  button {
    margin: 20px auto;
    display: block;
  }

  .divMiddle {
    padding-bottom: 20px;
  }
`;



const MenuPizza = (props) => {
  return (
      <MenuPizzaStc>
              <div className="menu-box pizza-menu">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 col-md-6">
                      <div className="image-holder">
                        <img src="/img/ab1.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-6">
                      <div className="menu-holder">
                        <h2>Pizza</h2>
                        <ul className="menu-list">
                          <li>
                            <div className="img-box">
                              <img src="/img/th1.jpg" alt="" />
                            </div>
                            <div className="menu-cont">
                              <h4>
                                <span className="title-menu">Oakey Smokey Pizzas k</span>
                                <span className="price">$21.00</span>
                              </h4>
                              <p>Smoke mozzarella, basil and picorino Romano</p>
                            </div>
                          </li>
                          <li>
                            <div className="img-box">
                              <img src="/img/th2.jpg" alt="" />
                            </div>
                            <div className="menu-cont">
                              <h4>
                                <span className="title-menu">White Ricotta Pizza</span>
                                <span className="price">$24.00</span>
                              </h4>
                              <p>Smoke mozzarella, basil and picorino Romano</p>
                            </div>
                          </li>
                          <li>
                            <div className="img-box">
                              <img src="/img/th3.jpg" alt="" />
                            </div>
                            <div className="menu-cont">
                              <h4>
                                <span className="title-menu">Original Margherita Pizza</span>
                                <span className="price">$22.00</span>
                              </h4>
                              <p>Smoke mozzarella, basil and picorino Romano</p>
                            </div>
                          </li>
                          <li>
                            <div className="img-box">
                              <img src="/img/th4.jpg" alt="" />
                            </div>
                            <div className="menu-cont">
                              <h4>
                                <span className="title-menu">Calzone</span>
                                <span className="price">$23.00</span>
                              </h4>
                              <p>Smoke mozzarella, basil and picorino Romano</p>
                            </div>
                          </li>
                          <li>
                            <div className="img-box">
                              <img src="/img/th5.jpg" alt="" />
                            </div>
                            <div className="menu-cont">
                              <h4>
                                <span className="title-menu">Mercy Margarita</span>
                                <span className="price">$18.00</span>
                              </h4>
                              <p>Smoke mozzarella, basil and picorino Romano</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="menu-box pasta-menu">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="menu-holder">
                        <h2>Pasta</h2>
                        <ul className="menu-list">
                          <li>
                            <div className="img-box">
                              <img src="/img/th6.jpg" alt="" />
                            </div>
                            <div className="menu-cont">
                              <h4>
                                <span className="title-menu">Spaghetti all’Amatriciana</span>
                                <span className="price">$21.00</span>
                              </h4>
                              <p>Smoke mozzarella, basil and picorino Romano</p>
                            </div>
                          </li>
                          <li>
                            <div className="img-box">
                              <img src="/img/th7.jpg" alt="" />
                            </div>
                            <div className="menu-cont">
                              <h4>
                                <span className="title-menu">Spaghetti Carbonara</span>
                                <span className="price">$24.00</span>
                              </h4>
                              <p>Smoke mozzarella, basil and picorino Romano</p>
                            </div>
                          </li>
                          <li>
                            <div className="img-box">
                              <img src="/img/th8.jpg" alt="" />
                            </div>
                            <div className="menu-cont">
                              <h4>
                                <span className="title-menu">Lasagna</span>
                                <span className="price">$22.00</span>
                              </h4>
                              <p>Smoke mozzarella, basil and picorino Romano</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 col-md-6">
                      <div className="image-holder">
                        <img src="/img/ab2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="menu-box burger-menu">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 col-md-6">
                      <div className="image-holder">
                        <img src="/img/ab3.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-6">
                      <div className="menu-holder">
                        <h2>Burger</h2>
                        <ul className="menu-list">
                          <li>
                            <div className="img-box">
                              <img src="/img/th9.jpg" alt="" />
                            </div>
                            <div className="menu-cont">
                              <h4>
                                <span className="title-menu">The Double Barrel Meat Feast</span>
                                <span className="price">$21.00</span>
                              </h4>
                              <p>Smoke mozzarella, basil and picorino Romano</p>
                            </div>
                          </li>
                          <li>
                            <div className="img-box">
                              <img src="/img/th10.jpg" alt="" />
                            </div>
                            <div className="menu-cont">
                              <h4>
                                <span className="title-menu">classNameic Havana Burger</span>
                                <span className="price">$24.00</span>
                              </h4>
                              <p>Smoke mozzarella, basil and picorino Romano</p>
                            </div>
                          </li>
                          <li>
                            <div className="img-box">
                              <img src="/img/th11.jpg" alt="" />
                            </div>
                            <div className="menu-cont">
                              <h4>
                                <span className="title-menu">Single BBQ Chicken Burger</span>
                                <span className="price">$22.00</span>
                              </h4>
                              <p>Smoke mozzarella, basil and picorino Romano</p>
                            </div>
                          </li>
                          <li>
                            <div className="img-box">
                              <img src="/img/th12.jpg" alt="" />
                            </div>
                            <div className="menu-cont">
                              <h4>
                                <span className="title-menu">Havana Speical Burger Combo</span>
                                <span className="price">$23.00</span>
                              </h4>
                              <p>Smoke mozzarella, basil and picorino Romano</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </MenuPizzaStc>
      );
    };
      
      export default MenuPizza;