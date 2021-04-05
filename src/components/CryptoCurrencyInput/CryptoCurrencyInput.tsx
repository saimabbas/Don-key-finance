/* eslint-disable jsx-a11y/alt-text */
import { ICurrency } from "interfaces";
import React, { useCallback, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useClickAwayListener } from "../../hooks";
import { AutoCompleteInput } from "./AutoCompleteInput";
import "./cryptocurrencyinput.scss";

export const CryptoCurrencyInput = <T extends ICurrency>({
  label,
  placeholder,
  currencies,
  currency,
  className = "",
  multi = false,
  noDropdown = false,
  icon,
  name,
  onChange,
  amount,
  onChangeAmount
}: {
  name?: string;
  icon?: string| React.ReactElement;
  noDropdown?: boolean;
  className?: string;
  multi?: boolean;
  currency?: T;
  currencies: T[];
  label: string;
  placeholder: string;
  amount?: number | null;
  onChangeAmount?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (token: T) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedCurrency = currency ? currency : currencies[0];
  

  const getNextIndex = (index: number) => {
    const next = index + 1;
    if (currencies.length === next) {
      return 0;
    }
    return next;
  };
  const currentIndex = currencies.indexOf(selectedCurrency);
  const getIcon = () => {
    if (icon) {
      return icon;
    }
    if (multi) {
      return (
        <>
          <img src={selectedCurrency.tokenIcon} />{" "}
          <img src={currencies[getNextIndex(currentIndex)].tokenIcon} />
        </>
      );
    }
    return <img src={selectedCurrency.tokenIcon} />;
  };
  const getName = () => {
    if (name) {
      return name;
    }
    if (multi) {
      return (
        <>
          {selectedCurrency.tokenSymbol}/
          {currencies[getNextIndex(currentIndex)].tokenSymbol}
        </>
      );
    }
    return selectedCurrency.tokenSymbol;
  };

  const handleChange = useCallback((item) => {
    setIsOpen(false);
    onChange && onChange(item)
  }, [onChange]);
  const renderInput = () => {
    if (isOpen) {
      return (
        <AutoCompleteInput
          onSelect={handleChange}
          multi={multi}
          currencies={currencies}
        />
      );
    }
    if (!isOpen) {
      return (
        <>
          <div
            className="cryptoinput__selected"
            onClick={noDropdown ? undefined : () => setIsOpen(true)}
          >
            <span className={`cryptoinput__icon`}>{getIcon()}</span>
            <span>{getName()}</span>
            {!noDropdown && (
              <span className="cryptoinput__caret">
                <FaCaretDown />
              </span>
            )}
          </div>
          <input
            className="cryptoinput__input "
            type="number"
            value={amount as number}
            onChange={onChangeAmount}
            placeholder={placeholder}
          />
        </>
      );
    }
  };

  const { onMouseDown } = useClickAwayListener({
    onClickAway: () => {
      setIsOpen(false);
    },
  });

  return (
    <div
      onMouseDown={onMouseDown}
      className={`cryptoinput ${isOpen ? "active" : ""} ${className}`}
    >
      <label className="cryptoinput__label">{label}</label>
      <div className="cryptoinput__wrapper">{renderInput()}</div>
    </div>
  );
};
