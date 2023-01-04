import React from "react";

import {
  Row,
  Column,
  Img,
  Text,
  Stack,
  Button,
  Input,
  SelectBox,
  Line,
  Grid,
} from "components";
import Sidebar from "components/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const OtherUserProfilePage = () => {
  const navigate = useNavigate();

  function handleNavigate45() {
    navigate("/myprofilecollection");
  }
  function handleNavigate46() {
    navigate("/saved");
  }
  function handleNavigate47() {
    navigate("/activebid");
  }
  function handleNavigate48() {
    navigate("/market");
  }
  function handleNavigate49() {
    navigate("/settings");
  }
  function handleNavigate50() {
    navigate("/message");
  }
  function handleNavigate51() {
    navigate("/");
  }
  function handleNavigate52() {
    navigate("/marketdetail");
  }
  function handleNavigate53() {
    navigate("/marketdetail");
  }
  function handleNavigate54() {
    navigate("/marketdetail");
  }
  function handleNavigate55() {
    navigate("/marketdetail");
  }
  function handleNavigate56() {
    navigate("/myprofilehistory");
  }
  function handleNavigate57() {
    navigate("/myprofilewallet");
  }
  function handleNavigate61() {
    navigate("/marketdetail");
  }
  function handleNavigate62() {
    navigate("/marketdetail");
  }

  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap font-outfit items-center mx-[auto] w-[100%]">
        <Sidebar className="md:hidden sm:hidden w-[21%]" />
        <Column className="flex flex-col items-center max-w-[1138px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between outline outline-[0.75px] outline-gray_100 sm:p-[15px] md:p-[23px] p-[34px] w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
              wrapClassName="flex my-[2px] sm:mx-[0] sm:w-[100%] w-[45%]"
              name="SearchInput"
              placeholder="Search items, collections, and users"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer ml-[1px] mr-[16px] sm:mr-[8px] md:mr-[11px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#93989a"
                    className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] md:mr-[15px] md:ml-[6px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              size="mdSrc"
            ></Input>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-center justify-center sm:mx-[0] my-[2px] sm:px-[0] sm:w-[100%] w-[32%]">
              <Button
                className="flex items-center justify-center min-w-[41%] text-center w-[max-content]"
                leftIcon={
                  <Img
                    src="images/img_sort.svg"
                    className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                    alt="sort"
                  />
                }
                shape="RoundedBorder10"
                size="lg"
                variant="OutlineGray100"
              >
                <div className="bg-transparent cursor-pointer font-medium text-[16px] text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1">
                  3,421 ETH
                </div>
              </Button>
              <Button
                className="flex sm:h-[28px] md:h-[36px] h-[52px] items-center justify-center sm:ml-[15px] md:ml-[20px] ml-[30px] sm:w-[27px] md:w-[35px] w-[52px]"
                shape="icbCircleBorder25"
                size="lgIcn"
                variant="icbOutlineGray100"
              >
                <Img
                  src="images/img_lock.svg"
                  className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                  alt="lock"
                />
              </Button>
              <SelectBox
                className="md:ml-[20px] ml-[30px] sm:mx-[0] sm:w-[100%] w-[27%]"
                placeholderClassName=""
                name="user Two"
                placeholder=""
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown.svg"
                    className="w-[24px] h-[24px] mr-[0] sm:h-[13px] sm:w-[12px] md:h-[17px] md:w-[16px] max-w-[100%]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
            </Row>
          </Row>
          <Stack className="font-urbanist h-[940px] relative w-[100%]">
            <Img
              src="images/img_rectangle2057.png"
              className="absolute h-[260px] max-w-[100%] top-[0] w-[100%]"
              alt="Rectangle2057"
            />
            <Row className="absolute bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-start justify-between sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[95%]">
              <Column className="bg-white_A700 flex flex-col items-center justify-center sm:mb-[144px] md:mb-[187px] mb-[272px] sm:mx-[0] md:p-[12px] sm:p-[15px] p-[18px] rounded-radius15 shadow-bs1 sm:w-[100%] w-[23%]">
                <Column className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                  <Img
                    src="images/img_ellipse1015_42X42.png"
                    className="h-[100px] sm:h-[54px] md:h-[69px] rounded-radius50 w-[100px] sm:w-[53px] md:w-[68px]"
                    alt="Ellipse1022"
                  />
                  <Column className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                    <Text
                      className="text-black_900 tracking-ls02 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Eleanor Pena
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[4px] w-[100%]">
                      <Text
                        className="flex-grow font-medium text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1"
                        variant="body2"
                      >
                        0x864784f44ajf84bskw4w...
                      </Text>
                      <Img
                        src="images/img_lock_18X18.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="lock One"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start mb-[10px] sm:mb-[5px] md:mb-[6px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-center text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body1"
                  >
                    Dedicated to create amazing for art exhibition information
                    please check link below:
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                    <Img
                      src="images/img_globe_18X18.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="globe"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[3px] md:ml-[4px] ml-[6px] not-italic text-black_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1"
                      variant="body2"
                    >
                      artistictea.io
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                    <Button
                      className="cursor-pointer font-medium min-w-[50%] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                      shape="RoundedBorder10"
                      size="md"
                      variant="FillGray900"
                    >
                      Follow
                    </Button>
                    <Button
                      className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:w-[17px] md:w-[22px] w-[32px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbOutlineGray100"
                    >
                      <Img
                        src="images/img_reply.svg"
                        className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                        alt="reply"
                      />
                    </Button>
                    <Button
                      className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:w-[17px] md:w-[22px] w-[32px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbOutlineGray100"
                    >
                      <Img
                        src="images/img_camera_32X32.svg"
                        className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                        alt="camera"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-gray_100 h-[1px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]" />
                  <Text
                    className="font-normal sm:mt-[15px] md:mt-[19px] mt-[29px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Joined April 2021
                  </Text>
                </Column>
              </Column>
              <Column className="flex flex-col items-center justify-start mt-[118px] sm:mt-[62px] md:mt-[81px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                    <Button
                      className="flex items-center justify-center min-w-[32%] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_grid.svg"
                          className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                          alt="grid"
                        />
                      }
                      shape="CircleBorder18"
                      size="md"
                      variant="FillBlack900"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1">
                        Created
                      </div>
                    </Button>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] rounded-radius18 sm:w-[100%] w-[34%]">
                      <Img
                        src="images/img_folderadd.svg"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[4px] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="folderadd"
                      />
                      <Text
                        className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mr-[4px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        Collection
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] rounded-radius18 sm:w-[100%] w-[29%]">
                      <Img
                        src="images/img_clock_24X24.svg"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[4px] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="clock Three"
                      />
                      <Text
                        className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mr-[4px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        History
                      </Text>
                    </Row>
                  </Row>
                  <Input
                    value={inputvalue1}
                    onChange={(e) => setInputvalue1(e?.target?.value)}
                    className="font-normal not-italic p-[0] text-[12px] placeholder:text-gray_500 text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[26%]"
                    name="SearchInput One"
                    placeholder="Search by name"
                    prefix={
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer ml-[3px] mr-[14px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue1?.length > 0 ? (
                        <CloseSVG
                          color="#93989a"
                          className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] md:mr-[15px] md:ml-[6px] my-[auto]"
                          onClick={() => setInputvalue1("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder8"
                    size="smSrc"
                    variant="srcOutlineGray300_1"
                  ></Input>
                </Row>
                <Column className="flex flex-col items-center justify-start sm:mt-[18px] md:mt-[23px] mt-[34px] sm:px-[0] w-[100%]">
                  <Grid className="sm:gap-[10px] md:gap-[13px] gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group33978_11.png')",
                        }}
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mb-[50px] md:mb-[64px] mb-[94px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                          <Button
                            className="cursor-pointer font-medium min-w-[67%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                            shape="CircleBorder14"
                            size="sm"
                            variant="Outline"
                          >
                            2h 4m 32s
                          </Button>
                          <Button
                            className="flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:ml-[4px] md:ml-[5px] ml-[8px] rounded-radius50 sm:w-[15px] md:w-[20px] w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="favorite"
                            />
                          </Button>
                        </Row>
                      </Column>
                      <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                        <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Person Melirik Kesamping
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            By Eleanor Pena
                          </Text>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                          <Column className="flex flex-col font-outfit sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                            <Text
                              className="not-italic text-gray_500 tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body3"
                            >
                              Current Bid
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-center mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                              <Img
                                src="images/img_sort.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="sort"
                              />
                              <Text
                                className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                                variant="body1"
                              >
                                2,42 ETH
                              </Text>
                            </Row>
                          </Column>
                          <Button
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[40%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                            onClick={handleNavigate55}
                            shape="RoundedBorder10"
                            size="md"
                            variant="FillGray900"
                          >
                            Place a Bid
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group33978_12.png')",
                        }}
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mb-[50px] md:mb-[64px] mb-[94px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                          <Button
                            className="cursor-pointer font-medium min-w-[67%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                            shape="CircleBorder14"
                            size="sm"
                            variant="Outline"
                          >
                            2h 4m 32s
                          </Button>
                          <Button
                            className="flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:ml-[4px] md:ml-[5px] ml-[8px] rounded-radius50 sm:w-[15px] md:w-[20px] w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_heart.svg"
                              className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="heart"
                            />
                          </Button>
                        </Row>
                      </Column>
                      <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                        <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Building Reflection Xd
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            By Eleanor Pena
                          </Text>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                          <Column className="flex flex-col font-outfit sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                            <Text
                              className="not-italic text-gray_500 tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body3"
                            >
                              Current Bid
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-center mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_sort.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="sort One"
                              />
                              <Text
                                className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                                variant="body1"
                              >
                                52,12 ETH
                              </Text>
                            </Row>
                          </Column>
                          <Button
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[40%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                            onClick={handleNavigate54}
                            shape="RoundedBorder10"
                            size="md"
                            variant="FillGray900"
                          >
                            Place a Bid
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group33978_13.png')",
                        }}
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mb-[50px] md:mb-[64px] mb-[94px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                          <Text
                            className="bg-gray_900_26 font-medium my-[1px] pl-[10px] sm:pl-[5px] md:pl-[6px] sm:pr-[15px] md:pr-[20px] pr-[30px] sm:py-[3px] md:py-[4px] py-[7px] rounded-radius14 text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[75px]"
                            variant="body2"
                          >
                            Ended
                          </Text>
                          <Button
                            className="flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:ml-[4px] md:ml-[5px] ml-[8px] rounded-radius50 sm:w-[15px] md:w-[20px] w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_heart.svg"
                              className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="heart One"
                            />
                          </Button>
                        </Row>
                      </Column>
                      <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                        <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Natural Atomic Circle
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            By Eleanor Pena
                          </Text>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                          <Column className="flex flex-col font-outfit sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                            <Text
                              className="not-italic text-gray_500 tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body3"
                            >
                              Fixed Price
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-center mt-[4px] w-[100%]">
                              <Img
                                src="images/img_sort.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="sort Two"
                              />
                              <Text
                                className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                                variant="body1"
                              >
                                22,52 ETH
                              </Text>
                            </Row>
                          </Column>
                          <Button
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[40%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                            onClick={handleNavigate53}
                            shape="RoundedBorder10"
                            size="md"
                            variant="FillGray900"
                          >
                            Place a Bid
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group33978_15.png')",
                        }}
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mb-[50px] md:mb-[64px] mb-[94px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                          <Text
                            className="bg-gray_900_26 font-medium my-[1px] pl-[10px] sm:pl-[5px] md:pl-[6px] sm:pr-[15px] md:pr-[20px] pr-[30px] sm:py-[3px] md:py-[4px] py-[7px] rounded-radius14 text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[75px]"
                            variant="body2"
                          >
                            Ended
                          </Text>
                          <Button
                            className="flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:ml-[4px] md:ml-[5px] ml-[8px] rounded-radius50 sm:w-[15px] md:w-[20px] w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_heart.svg"
                              className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="heart Two"
                            />
                          </Button>
                        </Row>
                      </Column>
                      <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                        <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Uowaw Your Face is Good
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            By Eleanor Pena
                          </Text>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                          <Column className="flex flex-col font-outfit sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                            <Text
                              className="not-italic text-gray_500 tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body3"
                            >
                              Fixed Price
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-center mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                              <Img
                                src="images/img_sort.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="sort Three"
                              />
                              <Text
                                className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                                variant="body1"
                              >
                                1,32 ETH
                              </Text>
                            </Row>
                          </Column>
                          <Button
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[40%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                            onClick={handleNavigate52}
                            shape="RoundedBorder10"
                            size="md"
                            variant="FillGray900"
                          >
                            Place a Bid
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group33978_16.png')",
                        }}
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mb-[50px] md:mb-[64px] mb-[94px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                          <Button
                            className="cursor-pointer font-medium min-w-[67%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                            shape="CircleBorder14"
                            size="sm"
                            variant="Outline"
                          >
                            2h 4m 32s
                          </Button>
                          <Button
                            className="flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:ml-[4px] md:ml-[5px] ml-[8px] rounded-radius50 sm:w-[15px] md:w-[20px] w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_heart.svg"
                              className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="heart Three"
                            />
                          </Button>
                        </Row>
                      </Column>
                      <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                        <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            One Blooded Hand
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            By Eleanor Pena
                          </Text>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                          <Column className="flex flex-col font-outfit sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                            <Text
                              className="not-italic text-gray_500 tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body3"
                            >
                              Current Bid
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-center mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                              <Img
                                src="images/img_sort.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="sort Four"
                              />
                              <Text
                                className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                                variant="body1"
                              >
                                5,52 ETH
                              </Text>
                            </Row>
                          </Column>
                          <Button
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[40%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                            onClick={handleNavigate62}
                            shape="RoundedBorder10"
                            size="md"
                            variant="FillGray900"
                          >
                            Place a Bid
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group33978_14.png')",
                        }}
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mb-[50px] md:mb-[64px] mb-[94px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                          <Button
                            className="cursor-pointer font-medium min-w-[67%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                            shape="CircleBorder14"
                            size="sm"
                            variant="Outline"
                          >
                            2h 4m 32s
                          </Button>
                          <Button
                            className="flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:ml-[4px] md:ml-[5px] ml-[8px] rounded-radius50 sm:w-[15px] md:w-[20px] w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="favorite One"
                            />
                          </Button>
                        </Row>
                      </Column>
                      <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                        <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Oldtown Artistic Alley
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            By Eleanor Pena
                          </Text>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                          <Column className="flex flex-col font-outfit sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                            <Text
                              className="not-italic text-gray_500 tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body3"
                            >
                              Current Bid
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-center mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_sort.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="sort Five"
                              />
                              <Text
                                className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                                variant="body1"
                              >
                                1,224 ETH
                              </Text>
                            </Row>
                          </Column>
                          <Button
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[40%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                            onClick={handleNavigate61}
                            shape="RoundedBorder10"
                            size="md"
                            variant="FillGray900"
                          >
                            Place a Bid
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                  </Grid>
                </Column>
              </Column>
            </Row>
          </Stack>
        </Column>
      </Row>
    </>
  );
};

export default OtherUserProfilePage;
