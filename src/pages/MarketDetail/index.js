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

const MarketDetailPage = () => {
  const navigate = useNavigate();

  function handleNavigate111() {
    navigate("/");
  }
  function handleNavigate117() {
    navigate("/myprofilecollection");
  }
  function handleNavigate118() {
    navigate("/saved");
  }
  function handleNavigate119() {
    navigate("/activebid");
  }
  function handleNavigate120() {
    navigate("/settings");
  }
  function handleNavigate121() {
    navigate("/message");
  }
  function handleNavigate122() {
    navigate("/otheruserprofile");
  }
  function handleNavigate123() {
    navigate("/myprofilehistory");
  }
  function handleNavigate124() {
    navigate("/otheruserprofile");
  }
  function handleNavigate125() {
    navigate("/myprofilewallet");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap font-outfit items-start mx-[auto] w-[100%]">
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
                      onClick={handleNavigate111}
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
                      onClick={handleNavigate121}
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
                    <Column
                      className="common-pointer flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                      onClick={handleNavigate120}
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
                  <Column className="flex flex-col font-outfit items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                    <Column className="bg-gray_900_5f flex flex-col justify-start p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                        <Img
                          src="images/img_user_3.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="user"
                        />
                        <Text
                          className="flex-grow font-medium md:ml-[12px] ml-[18px] sm:ml-[9px] text-gray_900 tracking-ls018 md:tracking-ls1 sm:tracking-ls1"
                          as="h5"
                          variant="h5"
                        >
                          Market
                        </Text>
                      </Row>
                    </Column>
                    <Column
                      className="common-pointer flex flex-col font-urbanist justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                      onClick={handleNavigate119}
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
                      className="common-pointer flex flex-col font-urbanist justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] p-[10px] sm:p-[5px] md:p-[6px] w-[100%]"
                      onClick={handleNavigate118}
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
                      onClick={handleNavigate117}
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
                      onClick={handleNavigate125}
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
                      onClick={handleNavigate123}
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
          <Column className="flex flex-col font-urbanist justify-start sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
            <Row className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:p-[3px] md:p-[4px] p-[6px] rounded-radius8 sm:w-[100%] w-[19%]">
              <Text
                className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body1"
              >
                Marketplace
              </Text>
              <Text
                className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body1"
              >
                {">"}
              </Text>
              <Text
                className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-gray_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body1"
              >
                Open Bid
              </Text>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
              <Img
                src="images/img_group33978_5.png"
                className="max-w-[100%] rounded-radius12 sm:w-[100%] w-[48%]"
                alt="Rectangle2054"
              />
              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="text-black_900 tracking-ls032 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Dayco Serpentine Belt
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-gray_500_ab tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Open repair of infrarenal aortic aneurysm or dissection,
                    plus repair of associated arterial trauma, following
                    unsuccessful endovascular repair; tube prosthesis...
                  </Text>
                </Column>
                <List
                  className="sm:gap-[17px] md:gap-[22px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:w-[100%] w-[70%]"
                  orientation="horizontal"
                >
                  <Row
                    className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]"
                    onClick={handleNavigate122}
                  >
                    <Img
                      src="images/img_ellipse1015_42X42.png"
                      className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                      alt="Ellipse1015 One"
                    />
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                      <Text
                        className="font-medium text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Creator
                      </Text>
                      <Text
                        className="font-semibold mt-[2px] text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Eleanor Pena
                      </Text>
                    </Column>
                  </Row>
                  <Row
                    className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]"
                    onClick={handleNavigate124}
                  >
                    <Img
                      src="images/img_ellipse1016.png"
                      className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                      alt="Ellipse1016"
                    />
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                      <Text
                        className="font-medium text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Owner
                      </Text>
                      <Text
                        className="font-semibold mt-[2px] text-black_900 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Ahmad Kazuto
                      </Text>
                    </Column>
                  </Row>
                </List>
                <Line className="bg-gray_100 h-[1.5px] sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]" />
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] pr-[4px] sm:px-[0] sm:w-[100%] w-[68%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                    <Text
                      className="font-medium text-gray_500_ab tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Auction End In
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[14px] sm:mt-[7px] md:mt-[9px] sm:px-[0] w-[100%]">
                      <Button
                        className="cursor-pointer font-semibold sm:h-[24px] md:h-[31px] h-[44px] text-[20px] text-black_900 text-center tracking-ls02 md:tracking-ls1 sm:tracking-ls1 sm:w-[23px] md:w-[30px] w-[44px]"
                        shape="RoundedBorder10"
                        size="md"
                        variant="FillGray50"
                      >
                        03
                      </Button>
                      <Img
                        src="images/img_user_10X10.svg"
                        className="h-[10px] sm:h-[6px] md:h-[7px] max-w-[100%] w-[10px] sm:w-[5px] md:w-[6px]"
                        alt="user Three"
                      />
                      <Button
                        className="cursor-pointer font-semibold sm:h-[24px] md:h-[31px] h-[44px] text-[20px] text-black_900 text-center tracking-ls02 md:tracking-ls1 sm:tracking-ls1 sm:w-[23px] md:w-[30px] w-[44px]"
                        shape="RoundedBorder10"
                        size="md"
                        variant="FillGray50"
                      >
                        12
                      </Button>
                      <Img
                        src="images/img_user_10X10.svg"
                        className="h-[10px] sm:h-[6px] md:h-[7px] max-w-[100%] w-[10px] sm:w-[5px] md:w-[6px]"
                        alt="user Four"
                      />
                      <Button
                        className="cursor-pointer font-semibold sm:h-[24px] md:h-[31px] h-[44px] text-[20px] text-black_900 text-center tracking-ls02 md:tracking-ls1 sm:tracking-ls1 sm:w-[23px] md:w-[30px] w-[44px]"
                        shape="RoundedBorder10"
                        size="md"
                        variant="FillGray50"
                      >
                        42
                      </Button>
                    </Row>
                  </Column>
                  <Column className="flex flex-col justify-start md:ml-[27px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                    <Text
                      className="font-medium text-gray_500_ab tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Current Bid
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                        alt="sort"
                      />
                      <Text
                        className="flex-grow ml-[10px] sm:ml-[5px] md:ml-[6px] text-black_900 tracking-ls02 md:tracking-ls1 sm:tracking-ls1"
                        as="h4"
                        variant="h4"
                      >
                        3,89 ETH
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[19px] md:mt-[25px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                  <Button
                    className="flex sm:h-[27px] md:h-[35px] h-[50px] items-center justify-center sm:w-[26px] md:w-[34px] w-[50px]"
                    shape="icbRoundedBorder8"
                    size="lgIcn"
                    variant="icbOutlineGray100"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                      alt="favorite"
                    />
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[77%] ml-[14px] sm:ml-[7px] md:ml-[9px] text-[14px] text-center text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="FillGray900"
                  >
                    Place A Bid
                  </Button>
                </Row>
              </Column>
            </Row>
            <Column className="flex flex-col justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
              <Text className="text-black_900 w-[auto]" as="h3" variant="h3">
                More Works by Eleanor Pena
              </Text>
              <List
                className="sm:gap-[10px] md:gap-[13px] gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius12 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group33978_11.png')",
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
                            alt="sort One"
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
                        className="cursor-pointer font-medium font-urbanist min-w-[40%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
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
                      backgroundImage: "url('images/img_group33978_12.png')",
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
                          alt="heart One"
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
                            alt="sort Two"
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
                        className="cursor-pointer font-medium font-urbanist min-w-[40%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
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
                      backgroundImage: "url('images/img_group33978_13.png')",
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
                          alt="heart Two"
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
                          Current Bid
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-urbanist items-center mt-[4px] w-[100%]">
                          <Img
                            src="images/img_sort.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="sort Three"
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
                        className="cursor-pointer font-medium font-urbanist min-w-[40%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
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
                      backgroundImage: "url('images/img_group33978_14.png')",
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
                            alt="sort Four"
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
                        className="cursor-pointer font-medium font-urbanist min-w-[40%] my-[1px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                        shape="RoundedBorder10"
                        size="md"
                        variant="FillGray900"
                      >
                        Place a Bid
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default MarketDetailPage;
