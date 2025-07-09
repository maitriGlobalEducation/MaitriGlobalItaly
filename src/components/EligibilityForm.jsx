import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;



// Step Titles
const steps = [
  "Personal Information",
  "Professional Info",
  "Language & Availability",
  "Additional Info",
];

// Validation Schemas
const schemas = [
  yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    dob: yup
      .date()
      .max(new Date(), "Date of Birth cannot be in the future")
      .required("Date of Birth is required"),
    gender: yup.string().required("Gender is required"),
    nationality: yup.string().required("Nationality is required"),
    country: yup.string().required("Country is required"),
    phone: yup.string().required("Phone number is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
  }),
  yup.object().shape({
    position: yup.string().required("Position is required"),
    qualification: yup.string().required("Qualification is required"),
    graduationYear: yup
      .date()
      .typeError("Graduation year is required")
      .required("Graduation year is required"),
    registered: yup.string().required("Please select an option"),
    documentsReady: yup.string().required("Please select an option"),
    passportStatus: yup.string().required("Please select an option"),
  }),
  yup.object().shape({
    studiedItalian: yup.string().required("Please select an option"),
    mode: yup.string().required("Please select an option"),
    availableDate: yup
      .date()
      .min(new Date(), "Available date cannot be in the past")
      .required("Available date is required"),
  }),
  yup.object().shape({
    notes: yup.string(),
  }),
];

const EligibilityForm = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    trigger,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemas[step]),
    mode: "onChange",
  });

  const handleNext = async () => {
    const valid = await trigger();
    if (valid) setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const onSubmit = async (data) => {
    if (step === steps.length - 1) {
      const valid = await trigger();
      if (!valid) return;

      setIsSubmitting(true); // 🛑 Prevent more clicks

      const allData = { ...getValues(), ...data };
      const payload = {
        fullName: allData.fullName,
        dateOfBirth: allData.dob?.toISOString?.().split("T")[0],
        gender: allData.gender,
        nationality: allData.nationality,
        currentCountry: allData.country,
        phone: allData.phone,
        email: allData.email,
        position: allData.position,
        qualification: allData.qualification,
        yearOfGraduation:
          allData.graduationYear?.getFullYear?.() || allData.graduationYear,
        councilRegistered: allData.registered,
        docsReady: allData.documentsReady,
        passportStatus: allData.passportStatus,
        italianKnowledge: allData.studiedItalian,
        languageMode: allData.mode,
        availabilityDate: allData.availableDate?.toISOString?.().split("T")[0],
        notes: allData.notes || "",
      };

      try {
        const response = await fetch(`${API_BASE_URL}/api/form`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          setSubmitted(true);
        } else {
          const errorData = await response.json();
          console.error("Submission failed:", errorData);
          alert("Submission failed. Please try again.");
        }
      } catch (error) {
        console.error("Network error:", error);
        alert("Network error. Please check your connection.");
      } finally {
        setIsSubmitting(false); // ✅ Reset after response
      }
    }
  };

  const inputStyle =
    "bg-white text-gray-800 border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400";
  const labelStyle = "text-sm text-gray-700 mb-2 block font-medium";
  const progressPercent = ((step + 1) / steps.length) * 100;

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* ✅ Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/flag.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Overlay */}

      {/* ✅ Form Container */}
      <div className="relative z-20 flex items-center justify-center px-4 py-10 min-h-screen">
        <div className="bg-white w-full max-w-4xl p-8 md:p-10 rounded-lg shadow-2xl text-gray-900 bg-opacity-95 backdrop-blur-md">
          {/* ✅ Title */}
          {!submitted && (
            <>
              <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
                Healthcare Professional Eligibility Form
              </h2>

              <div className="mb-6">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600 transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
                <p className="text-center text-sm mt-2 text-gray-500">
                  Step {step + 1} of {steps.length}:{" "}
                  <strong>{steps[step]}</strong>
                </p>
              </div>
            </>
          )}

          {/* ✅ Submitted */}
          {submitted ? (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Thank You!
              </h2>
              <p className="text-lg text-gray-700">
                Your information has been saved. Someone from our team will
                contact you soon.
              </p>
            </div>
          ) : (
            <form className="space-y-6">
              {/* ✅ Step 1 */}
              {step === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelStyle}>Full Name</label>
                    <input {...register("fullName")} className={inputStyle} />
                    <p className="text-red-500 text-sm">
                      {errors.fullName?.message}
                    </p>
                  </div>
                  <div>
                    <label className={labelStyle}>Date of Birth</label>
                    <Controller
                      name="dob"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          placeholderText="DD-MM-YYYY"
                          selected={field.value}
                          onChange={field.onChange}
                          className={inputStyle}
                          dateFormat="dd-MM-yyyy"
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          maxDate={new Date()}
                        />
                      )}
                    />
                    <p className="text-red-500 text-sm">
                      {errors.dob?.message}
                    </p>
                  </div>
                  <div>
                    <label className={labelStyle}>Gender</label>
                    <select {...register("gender")} className={inputStyle}>
                      <option value="">Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                    <p className="text-red-500 text-sm">
                      {errors.gender?.message}
                    </p>
                  </div>
                  <div>
                    <label className={labelStyle}>Nationality</label>
                    <input
                      {...register("nationality")}
                      className={inputStyle}
                    />
                    <p className="text-red-500 text-sm">
                      {errors.nationality?.message}
                    </p>
                  </div>
                  <div>
                    <label className={labelStyle}>Current Country</label>
                    <input {...register("country")} className={inputStyle} />
                    <p className="text-red-500 text-sm">
                      {errors.country?.message}
                    </p>
                  </div>
                  <div>
                    <label className={labelStyle}>Mobile Number</label>
                    <input {...register("phone")} className={inputStyle} />
                    <p className="text-red-500 text-sm">
                      {errors.phone?.message}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelStyle}>Email</label>
                    <input {...register("email")} className={inputStyle} />
                    <p className="text-red-500 text-sm">
                      {errors.email?.message}
                    </p>
                  </div>
                </div>
              )}

              {/* ✅ Step 2 */}
              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelStyle}>Position</label>
                    <select {...register("position")} className={inputStyle}>
                      <option value="">Select Position</option>
                      <option>Registered Nurse</option>
                      <option>Assistant Nurse</option>
                      <option>Other</option>
                    </select>
                    <p className="text-red-500 text-sm">
                      {errors.position?.message}
                    </p>
                  </div>
                  <div>
                    <label className={labelStyle}>Qualification</label>
                    <select
                      {...register("qualification")}
                      className={inputStyle}
                    >
                      <option value="">Select Qualification</option>
                      <option>B.Sc. Nursing</option>
                      <option>GNM</option>
                      <option>ANM</option>
                      <option>Diploma</option>
                      <option>Other</option>
                    </select>
                    <p className="text-red-500 text-sm">
                      {errors.qualification?.message}
                    </p>
                  </div>
                  <div>
                    <label className={labelStyle}>Graduation Year</label>
                    <Controller
                      name="graduationYear"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          selected={field.value}
                          onChange={field.onChange}
                          showYearPicker
                          dateFormat="yyyy"
                          placeholderText="Select Year"
                          className={inputStyle}
                        />
                      )}
                    />
                    <p className="text-red-500 text-sm">
                      {errors.graduationYear?.message}
                    </p>
                  </div>
                  <div>
                    <label className={labelStyle}>
                      Registered with Council?
                    </label>
                    <select {...register("registered")} className={inputStyle}>
                      <option value="">Select</option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>In Process</option>
                    </select>
                    <p className="text-red-500 text-sm">
                      {errors.registered?.message}
                    </p>
                  </div>
                  <div>
                    <label className={labelStyle}>Documents Ready?</label>
                    <select
                      {...register("documentsReady")}
                      className={inputStyle}
                    >
                      <option value="">Select</option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>Partially</option>
                    </select>
                    <p className="text-red-500 text-sm">
                      {errors.documentsReady?.message}
                    </p>
                  </div>
                  <div>
                    <label className={labelStyle}>Passport Status</label>
                    <select
                      {...register("passportStatus")}
                      className={inputStyle}
                    >
                      <option value="">Select</option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>Applied</option>
                    </select>
                    <p className="text-red-500 text-sm">
                      {errors.passportStatus?.message}
                    </p>
                  </div>
                </div>
              )}

              {/* ✅ Step 3 */}
              {step === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelStyle}>
                      Have you studied Italian?
                    </label>
                    <select
                      {...register("studiedItalian")}
                      className={inputStyle}
                    >
                      <option value="">Select</option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>Willing to start soon</option>
                    </select>
                    <p className="text-red-500 text-sm">
                      {errors.studiedItalian?.message}
                    </p>
                  </div>
                  <div>
                    <label className={labelStyle}>Learning Mode</label>
                    <select {...register("mode")} className={inputStyle}>
                      <option value="">Select</option>
                      <option>Online</option>
                      <option>Offline (India)</option>
                      <option>Not decided</option>
                    </select>
                    <p className="text-red-500 text-sm">
                      {errors.mode?.message}
                    </p>
                  </div>
                  <div>
                    <label className={labelStyle}>Available From</label>
                    <Controller
                      name="availableDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          selected={field.value}
                          onChange={field.onChange}
                          placeholderText="DD-MM-YYYY"
                          className={inputStyle}
                          dateFormat="dd-MM-yyyy"
                          minDate={new Date()}
                        />
                      )}
                    />
                    <p className="text-red-500 text-sm">
                      {errors.availableDate?.message}
                    </p>
                  </div>
                </div>
              )}

              {/* ✅ Step 4 */}
              {step === 3 && (
                <div>
                  <label className={labelStyle}>Additional Notes</label>
                  <textarea
                    {...register("notes")}
                    placeholder="Any questions or comments?"
                    className={`${inputStyle} h-28 resize-none`}
                  />
                </div>
              )}

              {/* ✅ Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 0}
                  className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded text-gray-800 disabled:opacity-50"
                >
                  Back
                </button>
                {step < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                    className={`${
                      isSubmitting
                        ? "bg-green-300 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    } px-4 py-2 rounded text-white flex items-center gap-2`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EligibilityForm;
