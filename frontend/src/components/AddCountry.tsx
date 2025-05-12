import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { useMutation } from "@apollo/client"
import { ADD_COUNTRY } from "../api/addCountry"
import { GET_COUNTRIES } from "../api/countries"
import { capitalizeWord } from "../utils/format"
import { AddCountryForm, CountryFormData } from "../types"
import { notifyError, notifySuccess } from "../utils/notify"

const initialFornData: CountryFormData = {
  name: "",
  emoji: "",
  code: "",
}

export function AddCountry() {
  const [formState, setFormState] = useState<AddCountryForm>({
    data: initialFornData,
    status: "typing",
  })

  const [addCountry] = useMutation(ADD_COUNTRY)

  const isDisabled = formState.status === "submitting"
  const isSubmitDisabled =
    isDisabled ||
    !formState.data.name ||
    !formState.data.code ||
    !formState.data.emoji

  const onSubmit = async (formData: CountryFormData) => {
    const addedCountry = await addCountry({
      variables: {
        data: {
          name: capitalizeWord(formData.name.trim()),
          emoji: formData.emoji.trim(),
          code: formData.code.trim().toUpperCase(),
        },
      },
      refetchQueries: [{ query: GET_COUNTRIES }],
    })
    if (!addedCountry.data) {
      throw new Error("Failed to add country")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      data: { ...prevState.data, [e.target.name]: e.target.value },
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setFormState((prevState) => ({
        ...prevState,
        status: "submitting",
      }))
      if (
        !formState.data.name ||
        !formState.data.code ||
        !formState.data.emoji
      ) {
        throw new Error("All fields are required")
      }
      await onSubmit(formState.data)
      notifySuccess("Country added successfully")
      setFormState((prevState) => ({
        ...prevState,
        data: initialFornData,
      }))
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : JSON.stringify(error)
      notifyError(errorMessage)
    } finally {
      setFormState((prevState) => ({
        ...prevState,
        status: "typing",
      }))
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="bg-neutral-200 p-4 flex flex-wrap gap-4  justify-evenly"
    >
      <div className="grid gap-0.5 flex-1">
        <label htmlFor="name">
          Name <span className="text-red-800">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          disabled={isDisabled}
          value={formState.data.name}
          onChange={handleChange}
          className="bg-white p-2 rounded-md border border-neutral-200"
        />
      </div>
      <div className="grid gap-0.5 flex-1">
        <label htmlFor="emoji">
          Emoji <span className="text-red-800">*</span>
        </label>
        <input
          id="emoji"
          type="text"
          name="emoji"
          disabled={isDisabled}
          value={formState.data.emoji}
          onChange={handleChange}
          className="bg-white p-2 rounded-md border border-neutral-200"
        />
      </div>
      <div className="grid gap-0.5 flex-1">
        <label htmlFor="code">
          Code <span className="text-red-800">*</span>
        </label>
        <input
          id="code"
          type="text"
          name="code"
          disabled={isDisabled}
          value={formState.data.code}
          onChange={handleChange}
          className="bg-white p-2 rounded-md border border-neutral-200"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitDisabled}
        className={twMerge(
          "bg-accent-500 cursor-pointer text-white rounded-md p-4 w-full flex-1 self-stretch",
          isSubmitDisabled && "opacity-50 cursor-not-allowed"
        )}
      >
        Add
      </button>
    </form>
  )
}
