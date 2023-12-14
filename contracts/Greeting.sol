    // SPDX-License-Identifier: GPL-3.0

    pragma solidity ^0.8.12;


    contract Greeting {

        string public greeting;

        constructor initialGreeting() {
            greeting = 'Enter Your Message and Get Back Your Greeting the Blockchain';
        }

        function storeGreeting(string memory _greeting) public {
            greeting = _greeting;
        }

        function getGreeting() public view returns (string memory) {
            return greeting;
            
        }
    }