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

const MyProfilePreviewPage = () => {
  const navigate = useNavigate();

  function handleNavigate16() {
    navigate("/");
  }
  function handleNavigate21() {
    navigate("/saved");
  }
  function handleNavigate22() {
    navigate("/activebid");
  }
  function handleNavigate23() {
    navigate("/market");
  }
  function handleNavigate24() {
    navigate("/settings");
  }
  function handleNavigate25() {
    navigate("/message");
  }
  function handleNavigate30() {
    navigate("/myprofilehistory");
  }
  function handleNavigate31() {
    navigate("/myprofilewallet");
  }
  function handleNavigate32() {
    navigate("/myprofilecollection");
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
          <Stack className="font-urbanist h-[936px] relative w-[100%]">
            <Column
              className="absolute bg-cover bg-no-repeat flex flex-col items-end justify-end sm:p-[15px] md:p-[23px] p-[34px] top-[0] w-[100%]"
              style={{ backgroundImage: "url('images/img_group33879.png')" }}
            >
              <Button
                className="flex sm:h-[20px] md:h-[25px] h-[36px] items-center justify-center md:mt-[107px] mt-[156px] sm:mt-[83px] rounded-radius50 sm:w-[19px] md:w-[24px] w-[36px]"
                size="smIcn"
                variant="icbFillWhiteA700"
              >
                <Img
                  src="images/img_ticket.svg"
                  className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                  alt="ticket"
                />
              </Button>
            </Column>
            <Row className="absolute bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-start justify-between sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[95%]">
              <Column className="bg-white_A700 flex flex-col items-center justify-center sm:mb-[142px] md:mb-[184px] mb-[268px] sm:mx-[0] md:p-[12px] sm:p-[15px] p-[18px] rounded-radius15 shadow-bs1 sm:w-[100%] w-[23%]">
                <Column className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                  <Img
                    src="images/img_ellipse1015.png"
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
                <Column className="flex flex-col items-center justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-center text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body1"
                  >
                    Dedicated to create amazing for art exhibition information
                    please check link below:
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                    <Img
                      src="images/img_globe_18X18.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="globe"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[3px] md:ml-[4px] ml-[6px] not-italic text-black_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1"
                      variant="body2"
                    >
                      weloveart.com/kevincranel
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                    <Button
                      className="cursor-pointer font-medium min-w-[50%] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                      shape="RoundedBorder10"
                      size="md"
                      variant="FillGray900"
                    >
                      Edit Profile
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
                    className="font-normal sm:mt-[14px] md:mt-[18px] mt-[27px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Joined November 2021
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
                    variant="srcFillGray50"
                  ></Input>
                </Row>
                <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                  <Grid className="sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group33978_7.png')",
                        }}
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[147px] sm:mb-[78px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                          <Button
                            className="cursor-pointer font-medium min-w-[67%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                            shape="CircleBorder14"
                            size="sm"
                            variant="Outline"
                          >
                            Ended
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
                      <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] md:ml-[5px] ml-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Diehard BATTERY-SILVER
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          By Ralph Edwards
                        </Text>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group33978.png')",
                        }}
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[147px] sm:mb-[78px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
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
                      <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] md:ml-[5px] ml-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Dayco Serpentine Belt
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          By Marvin McKinney
                        </Text>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group33978_8.png')",
                        }}
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[147px] sm:mb-[78px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                          <Button
                            className="cursor-pointer font-medium min-w-[67%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                            shape="CircleBorder14"
                            size="sm"
                            variant="Outline"
                          >
                            Ended
                          </Button>
                          <Button
                            className="flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:ml-[4px] md:ml-[5px] ml-[8px] rounded-radius50 sm:w-[15px] md:w-[20px] w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="favorite Two"
                            />
                          </Button>
                        </Row>
                      </Column>
                      <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] md:ml-[5px] ml-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Bosch Spark Plug
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          By Guy Hawkins
                        </Text>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group33978_10.png')",
                        }}
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[147px] sm:mb-[78px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                          <Button
                            className="cursor-pointer font-medium min-w-[67%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                            shape="CircleBorder14"
                            size="sm"
                            variant="Outline"
                          >
                            Ended
                          </Button>
                          <Button
                            className="flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:ml-[4px] md:ml-[5px] ml-[8px] rounded-radius50 sm:w-[15px] md:w-[20px] w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="favorite Three"
                            />
                          </Button>
                        </Row>
                      </Column>
                      <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] md:ml-[5px] ml-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Fram Oil Filter
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          By Jerome Bell
                        </Text>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group33978_5.png')",
                        }}
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[147px] sm:mb-[78px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
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
                              alt="favorite Four"
                            />
                          </Button>
                        </Row>
                      </Column>
                      <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] md:ml-[5px] ml-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Fram Oil Filter
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          By Eleanor Pena
                        </Text>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group33978_140X240.png')",
                        }}
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[147px] sm:mb-[78px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
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
                              alt="favorite Five"
                            />
                          </Button>
                        </Row>
                      </Column>
                      <Column className="flex flex-col justify-start mb-[12px] sm:mb-[6px] md:mb-[8px] md:ml-[5px] ml-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                        <Text
                          className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Mad Ballot Holder
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          By Angelina Cruzz
                        </Text>
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

export default MyProfilePreviewPage;
