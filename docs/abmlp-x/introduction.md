---
sidebar_position: 1
---

# ABMLP-X Introduction

Agent-Based Model Liquidity Preference-X is a computational interpretation of the third sectoral system described by G&L. View the model [accounting](https://docs.google.com/spreadsheets/d/1NcpXHy4gTfRFKzN3JeQgiL39_UO8THEleTs_sAEWOxs/edit#gid=1894302012).

ABMLP-X has agent class types, these being an Environment, Government, Central Bank as well as multiple Producers and Households. Producers use energy and employ Households. Households pursue wealth management strategies that include, but are not limited to, the management of a money asset portfolio and taxation payments.

## Model Context

### The United Kingdom of Great Britain and Northern Ireland (UK)

Model Government and Central Bank agents consume real-world UK expenditure and interest rate data that spans from the beginning of financial year 1694 to the latest available.

## Model Future

The model may *run to the future*, beyond the latest available data. A model *future run* will require economic time-series data inspired by historical analysis of UK Government expenditures. Central Bank agent logic alone will be used to set the base rate in every step: A two-stage logic that is defined by the expectations of Producer agents, and the velocity and acceleration of new money bills issued by the Government.

## Steady State System

:::tip Test Data App

The Hugging Face space, [abmlp-test](https://danodrisc-abmlp-test.hf.space), shows test output of agent-based model liquidity preference-X.

:::

:::note ABMLP-X Documentation

Agent properties, comments and functions are updated as the model evolves.

:::
