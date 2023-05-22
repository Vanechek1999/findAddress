import React, { useState, useEffect, useMemo } from "react";

import Typography from "../components/atoms/Typography/Typography";
import Header from "../components/molecules/Header/Header";
import Navigation from "../components/molecules/Navigation/Navigation";
import Paper from "../components/atoms/Paper/Paper";
import Input from "../components/atoms/Input/Input";
import Button from "../components/atoms/Button/Button";
import TextWithIcon from "../components/molecules/TextWithIcon/TextWithIcon";

import "../styles/global.scss";
import "../styles/SearchAddress.scss";

const SearchAddress = () => {
  const [address, setAddress] = useState();
  const [result, setResult] = useState([]);
  const [withoutResult, setWithoutResult] = useState(false);
  const [warning, setWarning] = useState();
  const [warningMessage, setWarningMessage] = useState("");
  const url =
    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  const token = "5caadcf293cd7dae8d58546d21096a916798f3ed";
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: address }),
  };

  useEffect(() => {
    const input = document.getElementById("writeAddress");

    input?.addEventListener("input", (event) => {
      setAddress(event.target.value);
      setWarning(false);
    });
  }, [address]);

  const getResult = () => {
    if (!address) {
      console.log(address.length);
      setWarningMessage("Данное поле не должно быть пустым");
      setWarning(true);
      return;
    } else if (address && address.length < 3) {
      setWarningMessage("Минимальная длина ввода - 3 символа");
      setWarning(true);
      return;
    }
    setWarningMessage("");
    setWarning(false);

    fetch(url, options)
      .then((response) => response.text())
      .then((result) => setResult(JSON.parse(result).suggestions))
      .catch((error) => console.log("error", error));
  };

  useMemo(() => {
    if (result.length <= 0 && address) {
      setWithoutResult(true);
      return;
    }
    setResult(result);
    setWithoutResult(false);
  }, [result]);

  return (
    <>
      <Header />
      <div className="SearchAddress">
        <Navigation />
        <Paper
          className="SearchAddress-Content"
          top={{ all: 32 }}
          right={{ all: 32 }}
          left={{ all: 32 }}
        >
          <Typography size={26} weight={700}>
            Поиск адресов
          </Typography>
          <Paper top={{ all: 16 }}>
            <Typography size={20} weight={500}>
              Введите интересующий вас адрес
            </Typography>
          </Paper>
          <Paper display="flex" top={{ all: 24 }}>
            <div className="SearchAddress-Search">
              <Input id="writeAddress" warning={warning} />
              {warning && (
                <Typography className="SearchAddress-WarningMessage" size={14}>
                  {warningMessage}
                </Typography>
              )}
              {withoutResult && (
                <Paper top={{ all: 32 }}>
                  <Paper
                    className="SearchAddress-SearchResult"
                    top={{ all: 24 }}
                    left={{ all: 24 }}
                    bottom={{ all: 24 }}
                  >
                    <Typography size={26} weight={700}>
                      Результаты поиска отсутствуют
                    </Typography>
                  </Paper>
                </Paper>
              )}
              {result?.length !== 0 && (
                <Paper top={{ all: 32 }}>
                  <Paper
                    className="SearchAddress-SearchResult"
                    top={{ all: 24 }}
                    left={{ all: 24 }}
                    bottom={{ all: 24 }}
                  >
                    <Paper bottom={{ all: 16 }}>
                      <Typography size={26} weight={700}>
                        Адреса
                      </Typography>
                    </Paper>
                    {result?.map((res) => {
                      return (
                        <Paper
                          className="SearchAddress-SearchResult_text"
                          top={{ all: 16 }}
                          bottom={{ all: 16 }}
                        >
                          <Typography size={20} weight={500}>
                            {res.value}
                          </Typography>
                        </Paper>
                      );
                    })}
                  </Paper>
                </Paper>
              )}
            </div>
            <Paper left={{ all: 24 }}>
              <Button
                onClick={getResult}
                xSpace={{ desktop: 40, mobile: 16 }}
                ySpace={{ all: 20 }}
                backGround="blue"
              >
                <TextWithIcon
                  padding={{ desktop: 16, mobile: 8 }}
                  leftSide
                  iconSize={32}
                  textSize={26}
                  textWeight={700}
                  svgType="searchWhite"
                  color="white"
                >
                  Поиск
                </TextWithIcon>
              </Button>
            </Paper>
          </Paper>
        </Paper>
      </div>
    </>
  );
};

export default SearchAddress;
