<template>
  <div class="h-full flex text-xs">
    <div class="h-full w-1/2 flex flex-col py-1 pr-2">
      <Text tag="h2" class="text-xl uppercase text-center"
        >Enregister nouvelle facture
      </Text>

      <div class="w-full mt-4">
        <div class="flex items-center w-full">
          <Text tag="p" class="w-3/5 font-bold">Référence du chantier :</Text>

          <input-field
            id="reference"
            v-model.trim="referenceProjectValue"
            placeholder="Saisir ici la référence"
            label-content="Référence"
            input-type="text"
            :error="error"
            :value="referenceProjectValue"
            @keyup.enter="$emit('save')"
            @keyup.esc="$emit('canceled')"
          />
        </div>

        <div class="flex items-center w-full my-2">
          <Text tag="p" class="w-3/5 font-bold">Client</Text>
          <input-field
            id="client"
            v-model.trim="clientProjectValue"
            placeholder="Saisir ici le client"
            label-content="Client"
            input-type="text"
            :error="error"
            :value="clientProjectValue"
            list="clients"
            @keyup.enter="$emit('save')"
            @keyup.esc="$emit('canceled')"
          />

          <datalist id="clients">
            <option value="LPC"></option>
            <option value="Ovalie"></option>
            <option value="Mason"></option>
            <option value="Helio"></option>
            <option value="Teste"></option>
          </datalist>
        </div>
      </div>
    </div>

    <div class="h-full w-1/2 shadow-lg py-1 px-2 grid grid-cols-3 grid-rows-6">
      <Text tag="p" class="col-start-3 row-start-1 place-self-center self-start"
        >Sudeco
      </Text>
      <div class="flex flex-col col-start-1 row-start-1 row-span-2 mt-8">
        <Text tag="h3" class="text-sm font-bold">Facture</Text>
        <div class="text-red-400 my-2">
          <Text tag="p">06.28.91.78.76</Text>
          <Text tag="p">sudeco31@gmail.com</Text>
        </div>

        <div class="text-gray-500">
          <Text tag="p">41 rue de la découvert</Text>
          <Text tag="p">CS 37621</Text>
          <Text tag="p">31676 Labège Cedex</Text>
        </div>
      </div>

      <div
        class="flex flex-col justify-between col-start-3 row-start-1 row-span-2 mt-12"
      >
        <div class="my-2">
          <Text tag="p" class="font-bold">A l'attention de :</Text>
          <div class="ml-2 mt-1">
            <Text tag="p"
              >{{
                clientProjectValue === ""
                  ? "Aucun destinataire"
                  : clientProjectValue
              }}
            </Text>
            <!--
                        <Text tag="p">13 chemin gramont</Text>
                        <Text tag="p">31200 toulouse</Text>
            -->
          </div>
        </div>
      </div>
      <div class="text-gray-500 col-start-3 row-start-3">
        <div class="flex justify-between">
          <Text tag="p">Numéro :</Text>
          <Text tag="p" class="text-end text-red-400">20210202</Text>
        </div>
        <div class="flex justify-between">
          <Text tag="p">Date :</Text>
          <Text tag="p" class="text-end text-red-400">12/12/2021</Text>
        </div>
      </div>
      <div class="row-start-3 col-start-1 col-span-full self-center">
        <div class="flex items-center">
          <Text tag="p">Référence du projet :</Text>
          <Text tag="p" class="font-bold ml-3"
            >{{
              referenceProjectValue === ""
                ? "Aucune référence pour l'instant"
                : referenceProjectValue
            }}
          </Text>
        </div>
      </div>

      <div
        class="col-start-1 col-span-full row-start-3 row-span-full mt-14 border-b border-red-400"
      >
        <table class="w-full shadow">
          <thead class="bg-red-400 text-white text-center">
            <tr>
              <th>Quantité</th>
              <th colspan="3" class="border-l border-r border-white">
                Description
              </th>
              <th>Unité</th>
              <th class="border-l border-r border-white">Prix U</th>
              <th>Montant</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr class="bg-gray-100 h-4">
              <td></td>
              <td colspan="8" />
            </tr>
            <tr class="h-4">
              <td>5</td>
              <td colspan="3" class="border-l border-r border-gray-100">
                Rprise flash + débarassage
              </td>
              <td>1</td>
              <td class="border-l border-r border-gray-200">29</td>
              <td>290</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { InputField } from "@/components/molecules";
import { Input, Button, Text } from "@/components/atoms";
import { ref } from "vue";

const referenceProjectValue = ref("");

const clientProjectValue = ref("");

const error = ref(false);
</script>
