{-|
Module      : HappyFlowers.Hardware.DeviceMock
Description : Mock communication with the sensor and pump
Copyright   : (c) Sacha Schmid, 2016
                  Rinesch Murugathas, 2016
License     : GPL-3
Maintainer  : schmid.sacha@gmail.com
Stability   : stable
-}
module HappyFlowers.Hardware.DeviceMock
    (
      -- * Operations
      readMoisture
    , readTemperature
    , triggerPump
    ) where

import Control.Concurrent (threadDelay)

-- | determines the length of the delay after the pump has been activated.
pumpDelay :: Int
pumpDelay = 5000000

-- | reads data about moisture from the chirp sensor.
readMoisture :: IO Int
readMoisture = do
    putStrLn "sensor on"
    putStrLn "sensor off"
    return 80

-- | reads data about temperature from the chirp sensor.
readTemperature :: IO Int
readTemperature = do
    putStrLn "sensor on"
    putStrLn "sensor off"
    return 25

-- | triggers the USB water pump.
triggerPump :: IO ()
triggerPump = do
    putStrLn "pump on"
    threadDelay pumpDelay
    putStrLn "pump off"
    threadDelay pumpDelay
