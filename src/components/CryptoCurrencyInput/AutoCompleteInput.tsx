/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Fuse from "fuse.js";
import { ICurrency } from "interfaces";
import { List, AutoSizer } from "react-virtualized";

export const AutoCompleteInput = <T extends ICurrency>({
	currencies,
	multi,
	onSelect = () => { },
}: {
	currencies: T[];
	multi?: boolean;
	onSelect: (token: T) => void;
}) => {
	const [inputValue, setInputValue] = useState("");

	const fuse = useMemo(() => {
		return new Fuse(currencies, { keys: ["tokenSymbol"] });
	}, [currencies]);

	const filteredCurrencies = useMemo(() => {
		if (inputValue === "") {
			return currencies;
		}

		return fuse.search(inputValue).map((val) => val.item);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputValue]);

	const onInputChange = useCallback((e) => {
		setInputValue(e.target.value);
	}, []);
	const getNextIndex = (index: number) => {
		const next = index + 1;
		if (currencies.length === next) {
			return 0;
		}
		return next;
	};

	const handleKeyDown = () => { };

	const renderRow = ({
		index,
		style
	}: {
		index: number;
		style: any
	}) => {
		const currency = filteredCurrencies[index];
		const getIcon = () => {
			if (multi) {
				return (
					<>
						<img src={currency.tokenIcon} />{" "}
						<img src={currencies[getNextIndex(index)].tokenIcon} />
					</>
				);
			}
			return <img src={currency.tokenIcon} />;
		};
		const getName = () => {
			if (multi) {
				return (
					<>
						{currency.tokenSymbol}/{currencies[getNextIndex(index)].tokenSymbol}
					</>
				);
			}
			return currency.tokenSymbol;
		};
		return (
			<div
				key={currency.tokenSymbol}
				onClick={() => onSelect(currency)}
				className="cryptoinput__list__item"
				style={style}
			>
				<span className="cryptoinput__icon">{getIcon()}</span>
				<span className="cryptoinput__name">{getName()}</span>
				<span className="cryptoinput__percent">
					{currency.apy_apyOneMonthSample.toFixed(2)}%<span>APY</span>
				</span>
				<span className="cryptoinput__value">{currency.balance}</span>
			</div>
		);
	};

	return (
		<div className="cryptoinput__wrapper">
			<span className="mr-3">
				<FaSearch />
			</span>
			<input
				className="cryptoinput__input text-left"
				autoComplete="off"
				autoCapitalize="none"
				spellCheck="false"
				value={inputValue}
				onChange={onInputChange}
				autoFocus
				type="text"
			/>
			<div className="cryptoinput__list">
				<AutoSizer>
					{({ height, width }) => {
						return <List
							height={height}
							width={width}
							rowHeight={50}
							rowRenderer={renderRow}
							rowCount={filteredCurrencies.length}
						/>
					}}
				</AutoSizer>

			</div>
		</div>
	);
};
