let signal = 0
radio.onReceivedNumber(function (receivedNumber) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (signal < -90) {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
