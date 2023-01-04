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
  List,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const MyProfileWalletPage = () => {
  const navigate = useNavigate();

  function handleNavigate33() {
    navigate("/message");
  }
  function handleNavigate34() {
    navigate("/");
  }
  function handleNavigate39() {
    navigate("/myprofilehistory");
  }
  function handleNavigate40() {
    navigate("/myprofilecollection");
  }
  function handleNavigate41() {
    navigate("/saved");
  }
  function handleNavigate42() {
    navigate("/activebid");
  }
  function handleNavigate43() {
    navigate("/market");
  }
  function handleNavigate44() {
    navigate("/settings");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap font-outfit items-center mx-[auto] w-[100%]">
        <aside className="md:hidden sm:hidden w-[21%]">
          <div className="">
            <Column className="bg-gray_50 border-bw15 border-gray_100 border-solid flex flex-col justify-start md:p-[12px] sm:p-[15px] p-[18px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[176px] md:ml-[11px] ml-[auto] mr-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
              <Column className="flex flex-col font-urbanist items-center justify-start max-w-[266px] ml-[auto] mr-[auto] sm:mt-[26px] md:mt-[34px] mt-[50px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] text-gray_901 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body2"
                  >
                    GENERAL
                  </Text>
                  <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                    <Column
                      className="common-pointer flex flex-col justify-start p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                      onClick={handleNavigate34}
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
                      onClick={handleNavigate33}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                        <Img
                          src="images/img_car.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="car"
                        />
                        <Text
                          className="flex-grow font-medium mb-[1px] md:ml-[12px] ml-[18px] sm:ml-[9px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Message
                        </Text>
                      </Row>
                    </Column>
                    <Column
                      className="common-pointer flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                      onClick={handleNavigate44}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                        <Img
                          src="images/img_settings.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="settings"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
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
                      onClick={handleNavigate43}
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
                      onClick={handleNavigate42}
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
                      onClick={handleNavigate41}
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
                      onClick={handleNavigate40}
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
                    <Column className="bg-gray_900_5f flex flex-col font-outfit justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                        <Img
                          src="images/img_calculator.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="calculator"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Wallet
                        </Text>
                      </Row>
                    </Column>
                    <Column
                      className="common-pointer flex flex-col font-urbanist justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                      onClick={handleNavigate39}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                        <Img
                          src="images/img_clock_24X24.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="clock Two"
                        />
                        <Text
                          className="flex-grow font-medium mb-[1px] md:ml-[12px] ml-[18px] sm:ml-[9px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
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
              <Stack className="font-urbanist h-[258px] max-w-[234px] md:mb-[11px] mb-[17px] sm:mb-[9px] md:ml-[11px] sm:ml-[8px] ml-[auto] mr-[auto] sm:mt-[26px] md:mt-[33px] mt-[49px] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
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
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
              <Text
                className="text-black_900 tracking-ls034 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h1"
                variant="h1"
              >
                Wallet
              </Text>
              <List
                className="sm:gap-[10px] md:gap-[13px] gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 flex flex-col justify-start outline outline-[0.75px] outline-gray_100 sm:p-[15px] md:p-[16px] p-[24px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                    <Button
                      className="flex sm:h-[23px] md:h-[29px] h-[42px] items-center justify-center rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                      size="mdIcn"
                      variant="icbFillGray50"
                    >
                      <Img
                        src="images/img_frame162465.png"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="Frame162465"
                      />
                    </Button>
                    <Column className="flex flex-col justify-end mt-[13px] sm:mt-[6px] md:mt-[8px] sm:pt-[4px] md:pt-[5px] pt-[8px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                        <Text
                          className="font-normal not-italic text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Total Spending
                        </Text>
                        <Text
                          className="mt-[13px] sm:mt-[6px] md:mt-[8px] text-black_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          $432,215.32
                        </Text>
                      </Column>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[3px] md:mt-[4px] mt-[6px] py-[3px] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                          <Img
                            src="images/img_cursor.svg"
                            className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                            alt="cursor"
                          />
                          <Text
                            className="flex-grow font-normal sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[1px] not-italic text-green_600 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            +2.4%
                          </Text>
                        </Row>
                        <div className="bg-gray_500 md:h-[3px] sm:h-[3px] h-[4px] sm:my-[3px] md:my-[4px] my-[7px] rounded-radius50 md:w-[2px] sm:w-[2px] w-[4px]"></div>
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          May 17, 2022
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col justify-start outline outline-[0.75px] outline-gray_100 sm:p-[15px] md:p-[16px] p-[24px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                    <Button
                      className="flex sm:h-[23px] md:h-[29px] h-[42px] items-center justify-center rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                      size="mdIcn"
                      variant="icbFillGray50"
                    >
                      <Img
                        src="images/img_frame162465_gray_900.png"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="Frame162465 One"
                      />
                    </Button>
                    <Column className="flex flex-col justify-end mt-[13px] sm:mt-[6px] md:mt-[8px] sm:pt-[3px] md:pt-[4px] pt-[6px] w-[100%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                        <Text
                          className="font-normal not-italic text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Total Income
                        </Text>
                        <Text
                          className="md:mt-[10px] mt-[15px] sm:mt-[7px] text-black_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          $21,579.22
                        </Text>
                      </Column>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[3px] md:mt-[4px] mt-[6px] py-[3px] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                          <Img
                            src="images/img_trendingup.svg"
                            className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                            alt="trendingup"
                          />
                          <Text
                            className="flex-grow font-normal sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[1px] not-italic text-red_600 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            -2.32
                          </Text>
                        </Row>
                        <div className="bg-gray_500 md:h-[3px] sm:h-[3px] h-[4px] sm:my-[3px] md:my-[4px] my-[7px] rounded-radius50 md:w-[2px] sm:w-[2px] w-[4px]"></div>
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          May 17, 2022
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col justify-start outline outline-[0.75px] outline-gray_100 md:p-[15px] sm:p-[15px] p-[23px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Column className="flex flex-col justify-start mb-[2px] ml-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                    <Button
                      className="flex sm:h-[23px] md:h-[29px] h-[42px] items-center justify-center rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                      size="mdIcn"
                      variant="icbFillGray50"
                    >
                      <Img
                        src="images/img_frame162465_gray_900_42X42.png"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="Frame162465 Two"
                      />
                    </Button>
                    <Column className="flex flex-col justify-end mt-[13px] sm:mt-[6px] md:mt-[8px] sm:pt-[4px] md:pt-[5px] pt-[8px] w-[100%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                        <Text
                          className="font-normal not-italic text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Total Saving
                        </Text>
                        <Text
                          className="mt-[13px] sm:mt-[6px] md:mt-[8px] text-black_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          $68,483.16
                        </Text>
                      </Column>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[3px] md:mt-[4px] mt-[6px] py-[3px] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                          <Img
                            src="images/img_cursor.svg"
                            className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                            alt="cursor One"
                          />
                          <Text
                            className="flex-grow font-normal sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[1px] not-italic text-green_600 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            +2.4%
                          </Text>
                        </Row>
                        <div className="bg-gray_500 md:h-[3px] sm:h-[3px] h-[4px] sm:my-[3px] md:my-[4px] my-[7px] rounded-radius50 md:w-[2px] sm:w-[2px] w-[4px]"></div>
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          May 17, 2022
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </List>
              <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Text
                    className="font-outfit text-black_900 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Recent Activity
                  </Text>
                  <Text
                    className="font-medium font-urbanist text-gray_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    View All
                  </Text>
                </Row>
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] outline outline-[0.75px] outline-gray_100 sm:py-[15px] md:py-[16px] py-[24px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                        <Text
                          className="font-medium mt-[2px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Item List
                        </Text>
                        <Text
                          className="font-medium sm:ml-[100px] md:ml-[129px] ml-[188px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Status
                        </Text>
                        <Text
                          className="font-medium sm:ml-[38px] md:ml-[49px] ml-[72px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Open Price
                        </Text>
                        <Text
                          className="font-medium sm:ml-[37px] md:ml-[48px] ml-[71px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Your Offer
                        </Text>
                        <Text
                          className="font-medium sm:ml-[37px] md:ml-[48px] ml-[71px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Time Left
                        </Text>
                      </Row>
                      <Line className="bg-gray_100 h-[1.5px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]" />
                    </Column>
                    <List
                      className="grid min-h-[auto] sm:mt-[11px] md:mt-[15px] mt-[22px] md:pr-[14px] sm:pr-[15px] pr-[21px] sm:w-[100%] w-[94%]"
                      orientation="vertical"
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                          <Img
                            src="images/img_ellipse1018_5.png"
                            className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                            alt="Ellipse1018"
                          />
                          <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                            <Text
                              className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Peachy Puch#22
                            </Text>
                            <Text
                              className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body2"
                            >
                              From Mindblowonstudio
                            </Text>
                          </Column>
                        </Row>
                        <Text
                          className="font-medium text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Actived
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="sort"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="sort One"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </Row>
                        <Text
                          className="font-medium text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          1h 19m
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                          <Img
                            src="images/img_group33978.png"
                            className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                            alt="Ellipse1018 One"
                          />
                          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
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
                              From Marvin McKinney
                            </Text>
                          </Column>
                        </Row>
                        <Text
                          className="font-medium sm:ml-[13px] md:ml-[17px] ml-[25px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          On Going
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[35px] ml-[51px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="sort One"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[43px] ml-[63px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="sort One One"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </Row>
                        <Text
                          className="font-medium sm:ml-[31px] md:ml-[40px] ml-[59px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          1h 19m
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                          <Img
                            src="images/img_group33978_1.png"
                            className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                            alt="Ellipse1018 Two"
                          />
                          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                            <Text
                              className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Pile of Many Plates
                            </Text>
                            <Text
                              className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body2"
                            >
                              From Ralphi Arness
                            </Text>
                          </Column>
                        </Row>
                        <Text
                          className="font-medium text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          On Going
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="sort Two"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="sort One Two"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </Row>
                        <Text
                          className="font-medium text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          1h 19m
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                          <Img
                            src="images/img_group33978_2.png"
                            className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                            alt="Ellipse1018 Three"
                          />
                          <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                            <Text
                              className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Worldpac Alternator
                            </Text>
                            <Text
                              className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body2"
                            >
                              From Annette Black
                            </Text>
                          </Column>
                        </Row>
                        <Text
                          className="font-medium sm:ml-[19px] md:ml-[25px] ml-[37px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Ended
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[48px] ml-[70px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="sort Three"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[43px] ml-[63px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="sort One Three"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </Row>
                        <Text
                          className="font-medium sm:ml-[31px] md:ml-[40px] ml-[59px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          1h 19m
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                          <Img
                            src="images/img_group33978_5.png"
                            className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                            alt="Ellipse1018 Four"
                          />
                          <Column className="flex flex-col items-center justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
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
                              From Eleanor Pena
                            </Text>
                          </Column>
                        </Row>
                        <Text
                          className="font-medium sm:ml-[45px] md:ml-[58px] ml-[85px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Actived
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[43px] ml-[63px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="sort Four"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[43px] ml-[63px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="sort One Four"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </Row>
                        <Text
                          className="font-medium sm:ml-[31px] md:ml-[40px] ml-[59px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          1h 19m
                        </Text>
                      </Row>
                    </List>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] outline outline-[0.5px] outline-gray_100 sm:p-[15px] md:p-[16px] p-[24px] sm:w-[100%] w-[30%]">
              <Column className="flex flex-col items-center justify-start md:mb-[11px] mb-[16px] sm:mb-[8px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text
                      className="flex-grow font-medium mt-[1px] text-black_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                      as="h5"
                      variant="h5"
                    >
                      Wallet
                    </Text>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="overflowmenu"
                    />
                  </Row>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] rounded-radius15 w-[100%]">
                    <Row
                      className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between p-[14px] sm:p-[7px] md:p-[9px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group33970.png')",
                      }}
                    >
                      <Column className="flex flex-col justify-start mb-[2px] ml-[4px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                        <Text
                          className="font-normal not-italic text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Local Banking Card
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between ml-[2px] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                          <Img
                            src="images/img_.svg"
                            className="max-w-[100%] mt-[4px] w-[18%]"
                            alt="Two"
                          />
                          <Img
                            src="images/img_.svg"
                            className="max-w-[100%] mt-[4px] w-[18%]"
                            alt="Three"
                          />
                          <Img
                            src="images/img_.svg"
                            className="max-w-[100%] mt-[4px] w-[18%]"
                            alt="Four"
                          />
                          <Text
                            className="font-normal not-italic text-white_A700_a2 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            3982
                          </Text>
                        </Row>
                        <Text
                          className="font-normal ml-[2px] sm:mt-[18px] md:mt-[23px] mt-[34px] not-italic text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Kevin Cranel
                        </Text>
                      </Column>
                      <Img
                        src="images/img_visalogo.svg"
                        className="max-w-[100%] mr-[1px] mt-[106px] sm:mt-[56px] md:mt-[72px] w-[19%]"
                        alt="visalogo"
                      />
                    </Row>
                  </Column>
                </Column>
                <Line className="bg-gray_100 h-[1.5px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]" />
                <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[15px] mt-[22px] sm:pt-[3px] md:pt-[4px] pt-[6px] w-[100%]">
                  <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                    <Text
                      className="font-normal not-italic text-gray_500 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Your Balance
                    </Text>
                    <Text
                      className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-black_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      $185,424.52
                    </Text>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                    <Button
                      className="cursor-pointer font-medium min-w-[81%] text-[14px] text-center text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                      shape="RoundedBorder10"
                      size="md"
                      variant="FillGray900"
                    >
                      Add New Card
                    </Button>
                    <Button
                      className="flex sm:h-[23px] md:h-[29px] h-[42px] items-center justify-center sm:w-[22px] md:w-[28px] w-[42px]"
                      shape="icbRoundedBorder8"
                      size="mdIcn"
                      variant="icbFillGray90067"
                    >
                      <Img
                        src="images/img_topup.png"
                        className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                        alt="TopUp"
                      />
                    </Button>
                  </Row>
                </Column>
                <Line className="bg-gray_100 h-[1.5px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]" />
                <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[33px] w-[100%]">
                  <Text
                    className="font-medium text-black_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Transaction History
                  </Text>
                  <List
                    className="sm:gap-[26px] md:gap-[33px] gap-[49px] grid min-h-[auto] sm:mt-[10px] md:mt-[13px] mt-[20px] pb-[1px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                        <Button
                          className="flex sm:h-[23px] md:h-[29px] h-[42px] items-center justify-center rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_icon.png"
                            className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                            alt="Icon"
                          />
                        </Button>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Exchange to ETH
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            Today at 4:13 PM
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="sort Five"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                          variant="body1"
                        >
                          2.22 ETH
                        </Text>
                      </Row>
                    </Row>
                    <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                        <Button
                          className="flex sm:h-[23px] md:h-[29px] h-[42px] items-center justify-center rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_topup.png"
                            className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                            alt="Frame162471"
                          />
                        </Button>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Enefty Top Up
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            Today at 4:23 PM
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="sort Six"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                          variant="body1"
                        >
                          1.32 ETH
                        </Text>
                      </Row>
                    </Row>
                    <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                        <Button
                          className="flex sm:h-[23px] md:h-[29px] h-[42px] items-center justify-center rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_icon_gray_900.png"
                            className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                            alt="Icon One"
                          />
                        </Button>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Open Bid Success
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            Yesterday at 5:12 AM
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="sort Seven"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[1px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                          variant="body1"
                        >
                          5.56 ETH
                        </Text>
                      </Row>
                    </Row>
                    <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[66%]">
                        <Button
                          className="flex items-center justify-center w-[23%]"
                          shape="icbCircleBorder21"
                          size="smIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_icon_gray_900.png"
                            className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                            alt="Icon Two"
                          />
                        </Button>
                        <Column className="flex flex-col mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Open Bid Success
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            Yesterday at 3:12 AM
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="sort Eight"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                          variant="body1"
                        >
                          2.21 ETH
                        </Text>
                      </Row>
                    </Row>
                    <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                        <Button
                          className="flex sm:h-[23px] md:h-[29px] h-[42px] items-center justify-center rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_topup.png"
                            className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                            alt="Frame162471 One"
                          />
                        </Button>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                          <Text
                            className="font-semibold text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Enefty Top Up
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            Yesterday at 3:12 AM
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          alt="sort Nine"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                          variant="body1"
                        >
                          2.32 ETH
                        </Text>
                      </Row>
                    </Row>
                  </List>
                </Column>
              </Column>
            </Column>
          </Row>
        </Column>
      </Row>
    </>
  );
};

export default MyProfileWalletPage;
