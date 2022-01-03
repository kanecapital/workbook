# Options

## Options Trading

Options are derivatives that are correlated with specific stocks and indexes. We go briefly into options terminology here, but will be doing an entire PDF on options in the near term future.

## Why options?

There are quite a few reason for trading options. Below we mention a few of them:

- Leverage: options (the contract itself) traditionally has a low value (~USD 1-5), so small movements in the underlying price cause a huge movement in the contract price. This gives us the opportunity to make +50% trades in minutes/hours.
- Risk Management: although options seem extremely risky for the untrained eye, it gives us better downside control. Depending on the strategy you use, it is possible to limit the downside risk.

## Options Chains

The first thing to understand about options is that they expire. Traditionally in your broker, you will see what's called the "Options Chains". This is composed by all the difference expirations for a series of contracts with a pre determined price (the strike price).

## The Greeks

Simply put, the Greeks are a set of risk measures that give information about a specific option, that are named after Greek letters. Greeks are one of the more intimidating aspects of option trading; this video helps make a solid introduction.

https://m.youtube.com/watch?v=GxmIvvROge4

### Delta

Delta is a measure of the change in an options price that results from a $1 change in the underlying security. For example, if delta = 0.5, a $1 increase in the price of the underlying security would lead to a $0.50 change in the respective options contract. For a put option, delta is negative because the value of put options is negatively correlated with the underlying security. As options move further in-the-money, delta will approach one (for calls) or negative one (for puts). As options move further out-of-the-money delta of both calls and puts will approach 0.

### Gamma

Gamma is a measurement of the rate of change of (derivative of) delta. While delta changes based on the price of the underlying asset, Gamma is a constant that changes based on the rate of change of delta. Gamma is going to be highest for options that are at-the-money. Options that are far in-the-money or far out-the-money will always have lower gamma.

### Theta

Theta measures the rate of time decay that is present in an options contract. Options contracts have expiration dates. Holding all else constant, as an option nears its expiration date, each day some of the value of the option will be eroded until the date of expiration. We call this measure of erosion theta. Theta increases the closer you get to an option’s expiration
date. For example, if an option is worth $0.50, and Theta = 0.05, the next day if the stock price hasn’t moved, the options contract will be worth $0.50 - $0.05 = $0.45.

### Vega

Vega measures the risk of changes in implied volatility, which is a measure of the stocks expected price variance looking into the future. This is more relevant for longer term options traders. Vega may increase when there are quick moves in the underlying security, and vega may decrease as options approach their expiration date.
In-The-Money vs. Out-The-Money: In-the-money refers to a.) a call option with a strike price that is below the current spot price b.) a put option with a strike price above the current spot price. At-the-money refers to options that have a strike price equal to the current spot price.
_Understand that 35% of options expire worthless. 95% expire down in value_
