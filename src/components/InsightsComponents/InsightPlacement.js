import { Link } from "react-router-dom";
import CompanyFetch from "./CompanyFetch";
import HeadingSection from "./HeadingSection";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useState } from "react";
import "./mega-menu.css"


export default function InsightPlacement2023() {
  const [query, setQuery] = useState("");
  const [Branch, setBranch] = useState("all");

  const handleAll = () => {
    setBranch("all")
    console.log(Branch);
  }
  const handleCE = () => {
    setBranch("ce")
    console.log(Branch);
  }
  const handleCHE = () => {
    setBranch("che")
    console.log(Branch);
  }
  const handleCSE = () => {
    setBranch("cse")
    console.log(Branch);
  }
  const handleECE = () => {
    setBranch("ece")
    console.log(Branch);
  }
  const handleEE = () => {
    setBranch("ee")
    console.log(Branch);
  }
  const handleEP = () => {
    setBranch("ep")
    console.log(Branch);
  }
  const handleESE = () => {
    setBranch("ese")
    console.log(Branch);
  }
  const handleFME = () => {
    setBranch("fme")
    console.log(Branch);
  }
  const handleME = () => {
    setBranch("me")
    console.log(Branch);
  }
  const handleMech = () => {
    setBranch("mech")
    console.log(Branch);
  }
  const handleMME = () => {
    setBranch("mme")
    console.log(Branch);
  }
  const handlePE = () => {
    setBranch("pe")
    console.log(Branch);
  }
  
  const handleAGL = () => {
    setBranch("agl")
    console.log(Branch);
  }
  const handleAGP = () => {
    setBranch("agp")
    console.log(Branch);
  }
  const handleMnC = () => {
    setBranch("m&c")
    console.log(Branch);
  }

  const inputHandler = (e) => {
    setQuery(e.target.value);
  };
  /////////////////////////styled components////////////////////////////////////////////
  const BodyLink = styled(Link)`
    background-color: ${(props) => props.activeColor || "white"};
    border-radius: 10px;
    padding: 10px 20px;
    margin: 5px;
    color: ${(props) =>
      props.activeColor ? "white" : "rgba(138, 94, 191, 1)"};
    border: ${(props) =>
      props.activeColor ? "" : "dashed 2px rgba(138, 94, 191, 1)"};
    text-decoration: none;

    &:hover {
      color: ${(props) =>
      props.activeColor ? "white" : "rgba(138, 94, 191, 1)"};
    }
  `;
  const Div = styled.div`
    margin: auto;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const InputField = styled.input`
    width: 90%;
    margin: 2rem 2.5%;
    height: 3rem;
    padding: 0 1rem;
    outline: none;
    border: rgba(138, 94, 191, 1) solid 1.5px;
    border-radius: 7.5px;
    color: rgba(138, 94, 191, 1);
    font-weight: 700;
  `;

  const Button = styled.button`
    height: 3rem;
    margin: 2rem 2.5%;
    padding: 0 1rem;
    width: 30%;
    background: linear-gradient(
      90deg,
      rgba(238, 109, 152, 1) 15%,
      rgba(138, 94, 191, 1) 85%
    );
    color: #fff;
    outline: none;
    border: none;
    border-radius: 7.5px;
    position: absolute;
    transform: translateX(-100%);
    cursor: pointer;
  `;

  

  const BranchDiv = styled.div`
  margin: 1rem 1.5rem 0 2rem;
  display: flex;
  justify-content: left;
  align-items: center;
  @media only screen and (max-width: 450px){
    margin-top: 0;
    margin-right: 2rem;
    display : flex;
    flex-wrap : wrap;
    align-items: center;
    justify-content: center;
  }
`;
const BranchLink = styled.button`
    background-color: ${(props) => props.activeColor || "white"};
    border-radius: 10px;
    padding: 10px 20px;
    margin: 5px;
    color: ${(props) =>
      props.activeColor ? "white" : "rgba(138, 94, 191, 1)"};
    border: ${(props) =>
      props.activeColor ? "" : "dashed 2px rgba(138, 94, 191, 1)"};
    text-decoration: none;
    
    &:hover {
      color: ${(props) =>
      props.activeColor ? "white" : "rgba(138, 94, 191, 1)"};
    }
  `;
  /////////////////////////styled components////////////////////////////////////////////

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Placement Insight </title>
        <link
          rel="icon"
          type="image/png"
          href="https://github.com/MejarKumar/All-Company-Logo/blob/main/favicon-32x32.png?raw=true"
        />
        <meta name="theme-color" content="#064420" />
      </Helmet>

      <HeadingSection />
      <Div>
        <BodyLink activeColor="rgba(238, 109, 152, 1)" to="/insight/placement/2022">
          Placement
        </BodyLink>
        {/* <BodyLink to="/insight/internship/2021">Internship</BodyLink> */}
      </Div>
      
      <InputField
        autoFocus
        placeholder="Search Here"
        value={query}
        onChange={inputHandler}
      />
      <Button>Search</Button>
      <Div>
              
          <div class="dropdown">
            <button class="dropbtn">{Branch.toUpperCase()}</button>
            <div class="dropdown-content">
                <BranchDiv>
                  <BranchLink onClick={handleAll}>
                    All
                  </BranchLink>
                </BranchDiv>
              <div class="sub-heading">B.Tech</div>
                <BranchDiv>
                  <BranchLink onClick={handleCE}>
                    CE
                  </BranchLink>
                  <BranchLink onClick={handleCHE}>
                    CHE
                  </BranchLink>
                  <BranchLink onClick={handleCSE}>
                    CSE
                  </BranchLink>
                  <BranchLink onClick={handleECE}>
                    ECE
                  </BranchLink>
                </BranchDiv>
                <BranchDiv>
                  <BranchLink onClick={handleEE}>
                    EE
                  </BranchLink>
                  <BranchLink onClick={handleEP}>
                    EP
                  </BranchLink>
                  <BranchLink onClick={handleESE}>
                    ESE
                  </BranchLink>
                  <BranchLink onClick={handleFME}>
                    FME
                  </BranchLink>
                </BranchDiv>
                <BranchDiv>
                  <BranchLink onClick={handleME}>
                    ME
                  </BranchLink>
                  <BranchLink onClick={handleMech}>
                    Mech
                  </BranchLink>
                  <BranchLink onClick={handleMME}>
                    MME
                  </BranchLink>
                  <BranchLink onClick={handlePE}>
                    PE
                  </BranchLink>
                </BranchDiv>
              <div class="sub-heading">Int. M.Tech</div>
              <BranchDiv>
                  <BranchLink  onClick={handleAGL}>
                    AGL
                  </BranchLink>
                  <BranchLink  onClick={handleAGP}>
                    AGP
                  </BranchLink>
                  <BranchLink  onClick={handleMnC}>
                    M&C
                  </BranchLink>
                </BranchDiv>
            </div>
          </div>
          
        

        <BodyLink activeColor="rgba(238, 109, 152, 1)" to="/insight/placement/2021">
          2021
        </BodyLink>
        <BodyLink to="/insight/placement/2022">
          2022
        </BodyLink>
        <BodyLink to="/insight/placement/2023">
          2023
        </BodyLink>
      </Div>

      <CompanyFetch url="placement" query={query} type="placement" year="2021" branch={Branch} />
    </>
  );
}
