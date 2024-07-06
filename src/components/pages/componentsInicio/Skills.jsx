import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Html from '../../../assets/html.png';
import Css from '../../../assets/css.png';
import Bootstrap from '../../../assets/bootstrap.png';
import Git from '../../../assets/git.png';
import React from '../../../assets/react.png';
import Node from '../../../assets/nodejs.png';
import Express from '../../../assets/express.png';
import Mongo from '../../../assets/mongo.webp';
import Java from '../../../assets/java.webp';
import C from '../../../assets/c.webp';
import Cpp from '../../../assets/c++.png';
import Python from '../../../assets/python.webp';
import Mysql from '../../../assets/mysql.webp';
import Ruby from '../../../assets/ruby.png';
import Github from '../../../assets/github.png';
import AOS from 'aos';
import IconoSkills from "../../../assets/skills.png";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Skills = () => {
  useEffect(()=>{
    AOS.init();
  }, []);

  return (
    <section className="habilidades py-3 pt-5" data-aos="zoom-in">
      <Container>
        <h2 className="anton-sc-regular"><img className="imgTitulo img-fluid" src={IconoSkills} alt="" />
          HABILIDADES
        </h2>
        <hr className="text-white" />
        <Row className="d-flex">
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill d-flex flex-column">
              <img
                src={Html}
                alt=""
                className="w-100 "
              />
              <span className="ToolSkill">HTML</span>
            </div>    
          </Col>
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill ">
              <img
                src={Css}
                alt=""
                className="w-100"
              />
              <span className="ToolSkill">CSS</span>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s"
                alt=""
                className="w-100"
              />
              <span className="ToolSkill">JAVASCRIPT</span>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill">
              <img
                src={Bootstrap}
                alt=""
                className="w-100"
              />
              <span className="ToolSkill">BOOTSTRAP</span>
            </div>
          </Col>
                  
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill">
              <img
                src={React}
                alt=""
                className="w-100"
              />
              <span className="ToolSkill">REACT</span>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill">
              <img
                src={Node}
                alt=""
                className="w-100"
              />
              <span className="ToolSkill">NODE.JS</span>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill">
              <img
                src={Express}
                alt=""
                className="w-100"
              />
              <span className="ToolSkill">EXPRESS.JS</span>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill">
              <img
                src={Mongo}
                alt=""
                className="w-100"
              /><span className="ToolSkill">MONGODB</span>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill">
              <img
                src={Java}
                alt=""
                className="w-100"
              />
              <span className="ToolSkill">JAVA</span>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill">
              <img
                src={C}
                alt=""
                className="w-100"
              />
              <span className="ToolSkill">C</span>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill">
              <img
                src={Cpp}
                alt=""
                className="w-100"
              />
              <span className="ToolSkill">C++</span>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill">
              <img
                src={Python}
                alt=""
                className="w-100"
              />
              <span className="ToolSkill">PYTHON</span>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill">
              <img
                src={Mysql}
                alt=""
                className="w-100"
              />
              <span className="ToolSkill">MYSQL</span>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill">
              <img
                src={Ruby}
                alt=""
                className="w-100"
              />
              <span className="ToolSkill">RUBY</span>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill">
              <img
                src={Git}
                alt=""
                className="w-100"
              />
              <span className="ToolSkill">GIT</span>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="d-flex justify-content-center"
          >
            <div className="skill">
              <img
                src={Github}
                alt=""
                className="w-100"
              />
              <span className="ToolSkill">GITHUB</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
