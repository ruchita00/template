import styled from "styled-components";
// import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const FooterCon = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const FooterSubContainer = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterCon>
            <FooterSubContainer>
              <h1 style={{ fontSize: "29px" }}>Mobipro</h1>
              <div>
                iPhone, iPod, iPad and Mac are registered trademarks of Apple,
                Inc. MobiPro is an independent service company and is in no way
                affiliated with Apple Inc.
              </div>
            </FooterSubContainer>
            <FooterSubContainer>
              <h1>Start your Repair</h1>
              <div>
                Stores Feedback Track Your Order Contact Us Warranty Claim Form
                Brand Partnership Client Interest Preferred Partner Referral
              </div>
            </FooterSubContainer>
            <FooterSubContainer>
              <h1>Learn More</h1>
              <div>
                About Partnership Careers Franchising Term & Condition Retail
                Partnership Corporate Tieups/ Gift Cards{" "}
              </div>
            </FooterSubContainer>
            <FooterSubContainer>
              <h1>Get the Newsletter</h1>
              <div>
                iPhone, iPod, iPad and Mac are registered trademarks of Apple,
                Inc. MobiPro is an independent service company and is in no way
                affiliated with Apple Inc.
              </div>
            </FooterSubContainer>
          </FooterCon>
        </FooterWrapper>
      </FooterContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "40px",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          fontSize: "14px",
          fontWeight: 400,
          paddingTop: "8px",
          cursor: "pointer",
        }}
      >
        www.mobipro.com
      </div>
    </>
  );
}

export default Footer;
