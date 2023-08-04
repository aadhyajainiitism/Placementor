import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faWifi } from "@fortawesome/free-solid-svg-icons";
// import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Form } from "react-bootstrap";
import styled from "styled-components";



const Button = styled.button`
  width: 150px;
  border-radius: 5px;
  outline: none;
  border: none;
  margin: 20px;
  padding: 10px;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(238, 109, 152, 1) 15%,
    rgba(138, 94, 191, 1) 85%
  );
  transition: all 0.5s;
  font-size: 1rem;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

function ContactForm() {

  return (
    <div className={styles.contact_section}>
      <div className={styles.card_section}>
        <div className={styles.first_card}>
          <div className={styles.row_items}>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faEnvelope} size={"lg"} />
            </div>
            <div>
              <p>
                placementor@gmail.<span>com</span>
              </p>
            </div>
          </div>
          <div className={styles.row_items}>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faWifi} size={"lg"} />
            </div>
            <div>
              <p>
                IIT (ISM) Dhanbad,
                Police Line, Sardar Patel Nagar, Hirapur, Dhanbad, Jharkhand 826004
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <br />
        <p style = {{fontWeight: "bold",
                      margin: "auto",
                      marginTop: "20px",
                      color: "rgba(138, 94, 191, 1)",
                      textAlign: "center",
                      }}>
          We would love to hear your thoughts and opinion. Please click here to share with us your feedback. Thank you.
        </p>
        <center>
        <a href="https://forms.gle/6g3NwYTNK2MDbbwQA" target="_blank">
          <Button>
            Feedback
          </Button>
        </a>
        </center>
      </div>
    </div>
    
  );
}

export default ContactForm;
