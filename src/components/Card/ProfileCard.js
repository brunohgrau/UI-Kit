import React from "react";
import styled from "styled-components";
import {
  FaPlusCircle,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";

const CardContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  width: 300px;
  height: 390px;
  background: white;
  margin: 0 auto;
  border-radius: 10px;

  box-shadow: 4px 4px 10px #999;

  > a {
    position: absolute;
    top: calc(50% - 1.9rem);
    left: calc(50% - 1.3rem);
    z-index: 2;
    color: rgb(79 70 229);
    font-size: 2em;
  }

  > a > .circle {
    position: absolute;
    background: white;
    border-radius: 50%;
    width: 1.004em;
  }
`;

const ImageContainer = styled.div`
  height: 130px;
  width: 100%;
  background: rgb(79 70 229);
  box-sizing: border-box;
  position: relative;

  > img {
    position: absolute;
    top: 1.5rem;
    left: calc(50% - 84px);
    width: 160px;
    height: 160px;
    padding: 3px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.6);
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  height: 200px;
  width: 100%;
  top: 200px;
  left: 0;
  padding: 10px 20px 0;
  box-sizing: border-box;
  background: white;
  text-align: center;

  .name {
    color: #333333;
    font-size: 1.4em;
    padding-top: 5px;
    background: rgba(255, 255, 255, 0.1);
    font-weight: bold;
  }

  .description {
    color: gray;
    font-size: 0.9em;
    padding-bottom: 5px;
    background: rgba(255, 255, 255, 0.1);

    > a {
      color: inherit;
      text-decoration: none;
      font-weight: bold;
    }
  }

  .line {
    background: rgb(79 70 229);
    width: 80%;
    height: 2px;
    margin: 5px auto -3px;
  }

  .stats {
    display: flex;
    position: absolute;
    left: 10%;
    padding-top: 10px;
    width: 80%;
    justify-content: space-around;
  }

  .stat {
    font-size: 1.3em;
    color: #333333;
    padding: 5px;
    font-weight: bold;
  }

  .subtext {
    color: gray;
    font-size: 0.6em;
    font-weight: normal;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 50px;
  background: #f2f2f2;
  border-top: 1px solid #fff;
  margin-top: 35px;
  border-radius: 5px;
  color: white;
  font-size: 2em;
  line-height: 1.5em;
  position: absolute;
  bottom: 0;
  text-align: center;

  > a {
    color: white;
  }

  .fb {
    position: absolute;
    left: 0;
    width: 33%;
    height: 100%;
    background-color: #3b5998;

    &:hover {
      background-color: #4264aa;
    }

    > svg {
      margin-top: 0.5rem;
    }
  }

  .twitter {
    position: absolute;
    left: 33%;
    width: 33%;
    height: 100%;
    background-color: #55acee;
    &:hover {
      background-color: #6cb7f0;
    }

    > svg {
      margin-top: 0.5rem;
    }
  }

  .linkedin {
    position: absolute;
    left: 66%;
    width: 34%;
    height: 100%;
    background-color: #2ecc71;
    &:hover {
      background-color: #40d47e;
    }

    > svg {
      margin-top: 0.5rem;
    }
  }
`;

const ProfileCard = () => {
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <img src="https://images.unsplash.com/photo-1641927420960-8059f26993d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </ImageContainer>
        <a className="view-more" href="">
          <FaPlusCircle className="circle" />
        </a>
        <ContentContainer>
          <div className="name">Joe Doe</div>
          <div className="description">
            Founder and Owner at <a href="https://facebook.com">Joe</a>
          </div>
          <div className="line"></div>
          <div className="stats">
            <div className="stat">
              100<div className="subtext">Followers</div>
            </div>
            <div className="stat">
              82k<div className="subtext">Likes</div>
            </div>
            <div className="stat">
              70k<div className="subtext">Shares</div>
            </div>
          </div>
        </ContentContainer>
        <FooterContainer>
          <a className="fb" href="">
            <FaFacebook />
          </a>
          <a className="twitter" href="">
            <FaTwitter />
          </a>
          <a className="linkedin" href="">
            <i className="fa fa-rocket" aria-hidden="true"></i>
            <FaLinkedinIn />
          </a>
        </FooterContainer>
      </CardContainer>
    </>
  );
};

export default ProfileCard;
