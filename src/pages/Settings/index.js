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
  TextArea,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();

  function handleNavigate100() {
    navigate("/saved");
  }
  function handleNavigate101() {
    navigate("/activebid");
  }
  function handleNavigate102() {
    navigate("/market");
  }
  function handleNavigate103() {
    navigate("/message");
  }
  function handleNavigate104() {
    navigate("/message");
  }
  function handleNavigate108() {
    navigate("/myprofilehistory");
  }
  function handleNavigate109() {
    navigate("/myprofilewallet");
  }
  function handleNavigate110() {
    navigate("/myprofilecollection");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap font-outfit items-start mx-[auto] sm:pb-[15px] md:pb-[23px] pb-[34px] w-[100%]">
        <aside className="md:hidden sm:hidden w-[21%]">
          <div className="">
            <Column className="flex flex-col justify-start max-w-[266px] ml-[auto] mr-[auto] sm:mx-[0] mx-[auto] sm:my-[18px] md:my-[23px] my-[34px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                <Img
                  src="images/img_ellipse1015.png"
                  className="sm:h-[30px] md:h-[39px] h-[56px] rounded-radius50 sm:w-[29px] md:w-[38px] w-[56px]"
                  alt="Ellipse1015"
                />
                <Column className="flex flex-col justify-start ml-[14px] md:ml-[9px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                  <Text
                    className="font-semibold text-black_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Kevin Cranel
                  </Text>
                  <Text
                    className="font-normal sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    @kecrane
                  </Text>
                </Column>
              </Row>
              <Column className="flex flex-col font-urbanist items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] text-black_900 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body2"
                  >
                    GENERAL
                  </Text>
                  <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                    <Column
                      className="common-pointer flex flex-col justify-start p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                      onClick={handleNavigate104}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                        <Img
                          src="images/img_clock_1.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="clock"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Dashboard
                        </Text>
                      </Row>
                    </Column>
                    <Column
                      className="common-pointer flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                      onClick={handleNavigate103}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                        <Img
                          src="images/img_car.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="car"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Message
                        </Text>
                      </Row>
                    </Column>
                    <Column className="bg-gray_900_5f flex flex-col font-outfit justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                        <Img
                          src="images/img_settings_24X24.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="settings"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Settings
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                  <Text
                    className="font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] text-gray_901 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body2"
                  >
                    MARKETPLACE
                  </Text>
                  <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                    <Column
                      className="common-pointer flex flex-col justify-start p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                      onClick={handleNavigate102}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                        <Img
                          src="images/img_user.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="user"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Market
                        </Text>
                      </Row>
                    </Column>
                    <Column
                      className="common-pointer flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                      onClick={handleNavigate101}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                        <Img
                          src="images/img_judge.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="judge"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Active Bid
                        </Text>
                      </Row>
                    </Column>
                    <Column
                      className="common-pointer flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                      onClick={handleNavigate100}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                        <Img
                          src="images/img_clock.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="clock One"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Saved
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                  <Text
                    className="font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] text-gray_901 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body2"
                  >
                    MY PROFILE
                  </Text>
                  <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                    <Column
                      className="common-pointer flex flex-col justify-start p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                      onClick={handleNavigate110}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                        <Img
                          src="images/img_user_24X24.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="user One"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Collection
                        </Text>
                      </Row>
                    </Column>
                    <Column
                      className="common-pointer flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                      onClick={handleNavigate109}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                        <Img
                          src="images/img_computer.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="computer"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Wallet
                        </Text>
                      </Row>
                    </Column>
                    <Column
                      className="common-pointer flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                      onClick={handleNavigate108}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                        <Img
                          src="images/img_clock_24X24.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="clock Two"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          History
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Stack className="font-urbanist h-[258px] md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[26px] md:mt-[34px] mt-[50px] relative sm:w-[100%] w-[88%]">
                <div className="absolute bg-gray_900 bottom-[0] sm:h-[125px] md:h-[161px] h-[233px] rounded-radius15 w-[100%]"></div>
                <Column className="absolute flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] top-[0] sm:w-[100%] w-[91%]">
                  <Button
                    className="flex sm:h-[27px] md:h-[35px] h-[50px] items-center justify-center rounded-radius50 sm:w-[26px] md:w-[34px] w-[50px]"
                    size="lgIcn"
                    variant="icbOutlineGray5003f"
                  >
                    <Img
                      src="images/img_question.svg"
                      className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                      alt="question"
                    />
                  </Button>
                  <Text
                    className="font-semibold mt-[14px] sm:mt-[7px] md:mt-[9px] text-white_A700 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Help Center
                  </Text>
                  <Column className="flex flex-col items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                    <Text
                      className="font-normal leading-[180.00%] not-italic text-center text-gray_400 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      variant="body1"
                    >
                      Having trouble in Enefti?
                      <br />
                      Please contact us for more question
                    </Text>
                    <Button
                      className="cursor-pointer font-medium min-w-[98%] sm:mt-[15px] md:mt-[20px] mt-[30px] text-[14px] text-center text-gray_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                      shape="RoundedBorder10"
                      size="md"
                      variant="FillWhiteA700"
                    >
                      Go To Help Center
                    </Button>
                  </Column>
                </Column>
              </Stack>
            </Column>
          </div>
        </aside>
        <Column className="flex flex-col items-center justify-start max-w-[1138px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
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
          <Column className="flex flex-col font-urbanist items-center justify-start sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                <Text className="text-black_900 w-[auto]" as="h3" variant="h3">
                  General Settings
                </Text>
                <Text
                  className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Update your photo and personal details here.
                </Text>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                <Text
                  className="font-medium text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Every changes automaticly saved
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                  <Button
                    className="cursor-pointer font-medium min-w-[48%] text-[14px] text-center text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillGray900"
                  >
                    Preview
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[48%] text-[14px] text-center text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillGray100"
                  >
                    Cancel
                  </Button>
                </Row>
              </Row>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                <Column className="bg-white_A700 flex flex-col justify-start outline outline-[0.75px] outline-gray_100 sm:py-[15px] md:py-[16px] py-[24px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Text
                    className="font-medium sm:ml-[12px] md:ml-[16px] ml-[24px] text-black_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Personal Information
                  </Text>
                  <Line className="bg-gray_100 h-[1.5px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]" />
                  <Column className="flex flex-col items-center justify-start md:ml-[16px] ml-[24px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] pt-[2px] sm:px-[0] sm:w-[100%] w-[94%]">
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                            <Text
                              className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              <span className="text-black_900 text-[16px] font-urbanist">
                                First Name
                              </span>
                              <span className="text-red_600 text-[16px] font-urbanist">
                                *
                              </span>
                            </Text>
                            <Input
                              className="font-normal not-italic p-[0] text-[14px] placeholder:text-black_900 text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                              wrapClassName="flex md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                              name="SearchInput One"
                              placeholder="Kevin"
                              prefix={
                                <Img
                                  src="images/img_user_2.svg"
                                  className="ml-[2px] mr-[12px] sm:mr-[6px] md:mr-[8px] my-[auto]"
                                  alt="user"
                                />
                              }
                              shape="RoundedBorder8"
                              size="md"
                              variant="OutlineGray400"
                            ></Input>
                          </Column>
                          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                            <Text
                              className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              <span className="text-black_900 text-[16px] font-urbanist">
                                Last Name
                              </span>
                              <span className="text-red_600 text-[16px] font-urbanist">
                                *
                              </span>
                            </Text>
                            <Input
                              className="font-normal not-italic p-[0] text-[14px] placeholder:text-black_900 text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                              wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                              name="SearchInput Two"
                              placeholder="Cranel"
                              shape="RoundedBorder8"
                              size="md"
                              variant="OutlineGray400"
                            ></Input>
                          </Column>
                        </Row>
                        <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                          <Text
                            className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            <span className="text-black_900 text-[16px] font-urbanist">
                              Email Address
                            </span>
                            <span className="text-red_600 text-[16px] font-urbanist">
                              *
                            </span>
                          </Text>
                          <Input
                            className="font-normal not-italic p-[0] text-[14px] placeholder:text-black_900 text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                            wrapClassName="flex md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                            type="email"
                            name="email"
                            placeholder="hello.kevincranel@workmail.com"
                            prefix={
                              <Img
                                src="images/img_checkmark_1.svg"
                                className="ml-[2px] mr-[12px] sm:mr-[6px] md:mr-[8px] my-[auto]"
                                alt="checkmark"
                              />
                            }
                            suffix={
                              <Img
                                src="images/img_checkmark_2.svg"
                                className="ml-[35px] mr-[4px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                                alt="checkmark"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="OutlineGray400"
                          ></Input>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]">
                          <Text
                            className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Username
                          </Text>
                          <Input
                            className="p-[0] w-[100%]"
                            wrapClassName="flex md:mt-[8px] md:pb-[8px] md:pl-[11px] md:pr-[9px] md:pt-[9px] mt-[12px] pb-[13px] pl-[16px] pr-[14px] pt-[14px] sm:mt-[6px] sm:pb-[6px] sm:pl-[15px] sm:pr-[7px] sm:pt-[7px] w-[100%]"
                            name="searchinput Three"
                            placeholder=""
                            prefix={
                              <Img
                                src="images/img_link.svg"
                                className="mr-[35px] sm:mr-[18px] md:mr-[24px] my-[auto]"
                                alt="link"
                              />
                            }
                            suffix={
                              <Img
                                src="images/img_checkmark_2.svg"
                                className="ml-[35px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                                alt="checkmark"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="OutlineGray400_1"
                          ></Input>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                          <Text
                            className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Biography
                          </Text>
                          <TextArea
                            className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[14px] placeholder:text-black_900 text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                            name="searchinput Four"
                            placeholder="Dedicated to create amazing for art exhibition information please check link below:"
                          ></TextArea>
                        </Column>
                      </Column>
                      <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                        <Text
                          className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Website
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] text-[14px] placeholder:text-black_900 text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          wrapClassName="flex md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                          name="weburl"
                          placeholder="weloveart.com/kevincranel"
                          prefix={
                            <Img
                              src="images/img_globe.svg"
                              className="ml-[2px] mr-[12px] sm:mr-[6px] md:mr-[8px] my-[auto]"
                              alt="globe"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="OutlineGray400"
                        ></Input>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] outline outline-[0.75px] outline-gray_100 sm:py-[15px] md:py-[16px] py-[24px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-medium sm:ml-[12px] md:ml-[16px] ml-[24px] text-black_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Notification Settings
                    </Text>
                    <Line className="bg-gray_100 h-[1.5px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]" />
                  </Column>
                  <List
                    className="grid min-h-[auto] sm:mt-[17px] md:mt-[22px] mt-[32px] pb-[100px] sm:pb-[53px] md:pb-[68px] sm:w-[100%] w-[94%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between pb-[4px] w-[100%]">
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                        <Text
                          className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Item Sold
                        </Text>
                        <Text
                          className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          When someone purchased one of your items
                        </Text>
                      </Column>
                      <Img
                        src="images/img_camera.svg"
                        className="max-w-[100%] w-[7%]"
                        alt="camera"
                      />
                    </Row>
                    <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between pb-[4px] w-[100%]">
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                        <Text
                          className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Successful Purchase
                        </Text>
                        <Text
                          className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          When you successfully buy an item
                        </Text>
                      </Column>
                      <Img
                        src="images/img_camera.svg"
                        className="max-w-[100%] w-[7%]"
                        alt="camera One"
                      />
                    </Row>
                    <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between pb-[4px] w-[100%]">
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                        <Text
                          className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Auction Expirates
                        </Text>
                        <Text
                          className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          When a timed auction you created ends
                        </Text>
                      </Column>
                      <Img
                        src="images/img_camera_24X40.svg"
                        className="max-w-[100%] w-[7%]"
                        alt="camera Two"
                      />
                    </Row>
                    <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between pb-[4px] w-[100%]">
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                        <Text
                          className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Owned Item Updates
                        </Text>
                        <Text
                          className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          When a significant update occurs for one of the items
                          you have purchased on Enefthy
                        </Text>
                      </Column>
                      <Img
                        src="images/img_camera_24X40.svg"
                        className="max-w-[100%] w-[7%]"
                        alt="camera Three"
                      />
                    </Row>
                  </List>
                </Column>
              </Column>
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                <Column className="bg-white_A700 flex flex-col items-center justify-start outline outline-[0.75px] outline-gray_100 sm:py-[15px] md:py-[16px] py-[24px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-medium sm:ml-[12px] md:ml-[16px] ml-[24px] text-black_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Your Photo
                    </Text>
                    <Line className="bg-gray_100 h-[1.5px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]" />
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                      <Img
                        src="images/img_ellipse1015.png"
                        className="sm:h-[35px] md:h-[45px] h-[64px] rounded-radius50 sm:w-[34px] md:w-[44px] w-[64px]"
                        alt="Ellipse1023"
                      />
                      <Column className="flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                        <Text
                          className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Edit your photo
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-outfit items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                          <Text
                            className="font-normal not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            Delete
                          </Text>
                          <Text
                            className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-red_600 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            Update
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] outline-[0.75px] outline-dashed outline-gray_901 p-[14px] sm:p-[7px] md:p-[9px] rounded-radius15 w-[100%]">
                      <Button
                        className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                        shape="icbCircleBorder25"
                        size="lgIcn"
                        variant="icbFillGray50"
                      >
                        <Img
                          src="images/img_cloud.svg"
                          className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                          alt="cloud"
                        />
                      </Button>
                      <Column className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                        <Text
                          className="font-medium text-gray_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Click to upload or drag and drop
                        </Text>
                        <Text
                          className="font-medium leading-[130.00%] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] text-center text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[41%]"
                          variant="body2"
                        >
                          PNG, JPG or Gif
                          <br />
                          Max 20Mb
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] outline outline-[0.75px] outline-gray_100 sm:py-[15px] md:py-[16px] py-[24px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-medium sm:ml-[12px] md:ml-[16px] ml-[24px] text-black_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Social Linked
                    </Text>
                    <Line className="bg-gray_100 h-[1.5px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]" />
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Img
                        src="images/img_signal.svg"
                        className="max-w-[100%] w-[30%]"
                        alt="signal"
                      />
                      <Button
                        className="cursor-pointer font-medium min-w-[35%] text-[14px] text-center text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillGreen600"
                      >
                        Connected
                      </Button>
                    </Row>
                    <Column className="flex flex-col justify-start mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                      <Text
                        className="font-medium text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Edit your photo
                      </Text>
                      <Text
                        className="font-normal leading-[180.00%] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        variant="body1"
                      >
                        Use Google to sign in to your account.
                        <br />
                        Click here to learn more.
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default SettingsPage;
