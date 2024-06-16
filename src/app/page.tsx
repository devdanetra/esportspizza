"use client"

import data from 'src/data/pizza.json';
import { PizzeriaItem, PizzeriaItemProps } from '~/components/custom/pizzeria';
import Image from 'next/image'
import logoSvg from './public/img/logo.svg'
import { Divider, Group, Stack, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import {haversineDistance} from '../lib/haversine'
function Home() {
  const [coords, setCoords] = useState<GeolocationCoordinates>();
  const [nearbyPizzeria, setNearbyPizzeria] = useState<PizzeriaItemProps | undefined>();
  const [nearbyPizzeriaDistanceMt, setNearbyPizzeriaDistanceMt] = useState<number>(0);


  useEffect(() => {
    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          for (const pizzeria of data.pizzerias) {
            const distanceMt = haversineDistance(pizzeria.coords[0],pizzeria.coords[1],coords.latitude,coords.longitude)
            if(distanceMt < 5000){
              const pizzeriaItem: PizzeriaItemProps = {
                pizzeria: pizzeria
              };
              setNearbyPizzeria(pizzeriaItem)
              setNearbyPizzeriaDistanceMt(distanceMt)
            }
          }
          setCoords(coords);
          return;
        })
    }
}, []);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-pizzaYellow">
      <Image
        src={logoSvg}
        width={500}
        height={500}
        alt="Esport Pizza Logo"
      />
      <Stack gap={4} align='center'>
      <Text ta="center" c={"white"} size='sm' fw={"bold"}>There currently are {data.pizzerias.length} approved pizzerias on this website.</Text>
      {nearbyPizzeria && 
        <Stack align='center'>
          <Text c={"white"} size='lg' fw={"bold"}>You seem to be close to {nearbyPizzeria.pizzeria.name}! </Text>
          <PizzeriaItem key={"Close"} pizzeria={nearbyPizzeria.pizzeria} isNearby distanceMt={nearbyPizzeriaDistanceMt}/>
          <Divider my="md" />
        </Stack>
      
      }
      <Text c={"white"} size='32px' fw={"bold"} mb={30}>All Pizzerias</Text>

      {data.pizzerias.map((pizzeria, index) => (
        <PizzeriaItem key={index} pizzeria={pizzeria}/>
      ))}
      </Stack>
      <Group gap={8} mt={40}>
      <Text c={"white"} size='sm' fw={"bold"}>Made with ❤️ by</Text>
      <a     style={{
      color: "white",
      fontWeight: 600
    }} href="https://twitter.com/that_marcy" target="_blank">devdanetra</a>
      </Group>

    </main>
  );
}

export default Home;
