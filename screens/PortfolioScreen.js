import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Currency from '../components/PortfolioCurrency'

const PortfolioScreen = () => {
    return (
        <View style={{
            flex: 1,
            marginTop: 30
        }}>
            <Image 
                style={{
                    width: "100%",
                    height: "40%"
                }}
                source={require('../assets/portfolio.png')}
            />
            <View style={{
                marginVertical: 20,
                marginHorizontal: 20
            }}>
                <Text style={{
                    fontSize: 17,
                    letterSpacing: 2
                }}>Portfolio balance</Text>
                <Text style={{
                    fontSize: 35,
                    fontWeight: "bold"
                }}>$69.420</Text>
            </View> 

            <ScrollView style={{
                backgroundColor: "#FFF"
            }}>
                <Currency 
                    image={"https://cryptologos.cc/logos/usd-coin-usdc-logo.png"}
                    name="USD coin"
                    label="USD"
                    value="69.420"
                />
                <Currency 
                    image={"https://www.ebuyer.com/blog/wp-content/uploads/2013/11/bitcoin-logo-1000_0.jpg"}
                    name="Bitcoin"
                    label="BTC"
                    value="35,000"
                />
                <Currency 
                    image={"https://logodownload.org/wp-content/uploads/2021/01/bitcoin-cash-logo-5.png"}
                    name="Bitcoin cash"
                    label="BTCH"
                    value="10,000"
                />
                <Currency 
                    image={"https://img.favpng.com/25/3/8/litecoin-cryptocurrency-bitcoin-logo-png-favpng-4kyBSfxyMqZ1TrWcGwSdjwWtu.jpg"}
                    name="Litecoin"
                    label="LTC"
                    value="69.420"
                />
                <Currency 
                    image={"https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png"}
                    name="Etherium"
                    label="ETH"
                    value="69.420"
                />
                <Currency 
                    image={"https://preview.redd.it/72ssbszi6fm61.jpg?width=1200&format=pjpg&auto=webp&s=aad786ba8098ebae9bac13d06a00021fa40c9be2"}
                    name="Doge coin"
                    label="DGC"
                    value="69.420"
                />
            </ScrollView>

        </View>
        
    )
}

export default PortfolioScreen

const styles = StyleSheet.create({})
