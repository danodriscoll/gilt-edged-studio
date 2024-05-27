---
sidebar_position: 1
---

# ABMLP-X Introduction

Agent-Based Model Liquidity Preference-X is a computational interpretation of the third sectoral system described by G&L. View the model [accounting](https://docs.google.com/spreadsheets/d/1NcpXHy4gTfRFKzN3JeQgiL39_UO8THEleTs_sAEWOxs/edit#gid=1894302012).

ABMLP-X has agent class types, these being an Environment, Government, Central Bank as well as multiple Producers and Households. Producers employ Households and use energy. Households pursue wealth management strategies that include, but are not limited to, the management of a money asset portfolio and taxation payments.

Model Government and Central Bank agents consume real-world UK economic time-series data that spans the beginning of the financial year 1974 to the latest available. The model may *run to the future*, beyond the latest available data. A model *future run* will require economic time-series data inspired by historical analysis of UK Government expenditures.

## A Model Future, Gilt Dynamics and Monetary Policy Defined

In the event of a model *run to the future*, Central Bank agent logic alone will be used to set the base interest rate in every step. A logic defined by both the recorded expectations of Producer agents as well as the velocity and acceleration of new money bills issued.

:::info Gilt

A gilt is a UK Government liability denominated in sterling, issued by the UK Treasury and listed on the London Stock Exchange. The term "gilt" or "gilt-edged security" is a reference to the primary characteristic of gilts as an investment: their security.

:::

## Steady State System

:::tip Test Data App

The Hugging Face space, [abmlp-test](https://danodrisc-abmlp-test.hf.space), shows test output of agent-based model liquidity preference-X.

:::

:::note ABMLP-X Documentation

Agent properties, comments and functions are updated as the model evolves.

:::
