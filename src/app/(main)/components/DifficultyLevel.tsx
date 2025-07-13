"use client";

import FormContainer from "@/app/components/form/FormContainer";
import FormCheckbox from "@/app/components/form/FormCheckbox";
import SubmitButton from "@/app/components/form/SubmitButton";
import { useActionState, useEffect, useState } from "react";
import { ActionState } from "@/lib/utils/types/formType";
import {
  DifficultyLevelProps,
  StoryListFormType,
} from "@/lib/utils/types/mainType";

const initialCheckedState = {
  isAll: false,
  isEasy: false,
  isMedium: false,
  isHard: false,
};

const initialActionState: ActionState<StoryListFormType> = {
  message: "",
  timestamp: null, // กำหนดค่าเริ่มต้นเป็น null
  data: undefined,
};

const searchAction = async (
  prevState: ActionState<StoryListFormType>, // [ปรับปรุง] 3. ใช้ Type ที่สร้างขึ้น
  formData: FormData
): Promise<ActionState<StoryListFormType>> => {
  // หน่วงเพื่อจำลองการติดต่อ API
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const difficulty = {
    isAll: formData.get("isAll") === "true",
    isEasy: formData.get("isEasy") === "true",
    isMedium: formData.get("isMedium") === "true",
    isHard: formData.get("isHard") === "true",
  };

  console.log("--- Submitted Data ---", difficulty);

  return {
    message: "Search successful!",
    timestamp: Date.now().toString(),
    data: difficulty,
  };
};

const DifficultyLevel = ({ onSearch }: DifficultyLevelProps) => {
  const [checkedState, setCheckedState] = useState(initialCheckedState);
  const [actionState, formAction] = useActionState(
    searchAction,
    initialActionState
  );

  useEffect(() => {
    // ใช้ actionState.timestamp เพื่อเช็คเงื่อนไข
    if (actionState.timestamp) {
      console.log("Action completed:", actionState);
      console.log("checkedState:", checkedState);
      onSearch(checkedState);

      // Reset form
      setCheckedState(checkedState);
    }
  }, [actionState, onSearch]); // อ้างอิงจาก actionState

  const handleAllChange = (isChecked: boolean) => {
    setCheckedState({
      isAll: isChecked,
      isEasy: isChecked,
      isMedium: isChecked,
      isHard: isChecked,
    });
  };

  const handleIndividualChange = (name: string, isChecked: boolean) => {
    const newCheckedState = { ...checkedState, [name]: isChecked };

    const allOthersChecked =
      newCheckedState.isEasy &&
      newCheckedState.isMedium &&
      newCheckedState.isHard;

    newCheckedState.isAll = allOthersChecked;

    setCheckedState(newCheckedState);
  };

  return (
    <FormContainer
      action={formAction}
      className="flex items-center justify-end gap-2 w-full"
    >
      <FormCheckbox
        name="isAll"
        label="All"
        className="font-bold"
        isChecked={checkedState.isAll}
        onChange={handleAllChange}
      />
      <FormCheckbox
        name="isEasy"
        label="Easy"
        className="font-bold"
        isChecked={checkedState.isEasy}
        onChange={(isChecked) => handleIndividualChange("isEasy", isChecked)}
      />
      <FormCheckbox
        name="isMedium"
        label="Medium"
        className="font-bold"
        isChecked={checkedState.isMedium}
        onChange={(isChecked) => handleIndividualChange("isMedium", isChecked)}
      />
      <FormCheckbox
        name="isHard"
        label="Hard"
        className="font-bold"
        isChecked={checkedState.isHard}
        onChange={(isChecked) => handleIndividualChange("isHard", isChecked)}
      />
      <SubmitButton
        text="Search"
        variant="outline"
        className="ml-4 max-w-[180px] w-full"
      />
    </FormContainer>
  );
};
export default DifficultyLevel;
