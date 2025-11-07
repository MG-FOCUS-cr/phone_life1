import { createSlice } from '@reduxjs/toolkit'

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    appointments: [],
    availableSlots: [],
    currentBooking: {
      device: null,
      repairs: [],
      date: null,
      time: null,
      serviceType: 'classic',
      customer: null,
      total: 0
    }
  },
  reducers: {
    setDevice: (state, action) => {
      state.currentBooking.device = action.payload
    },
    setRepairs: (state, action) => {
      state.currentBooking.repairs = action.payload
      state.currentBooking.total = action.payload.reduce((sum, repair) => sum + repair.price, 0)
    },
    setAppointmentDateTime: (state, action) => {
      state.currentBooking.date = action.payload.date
      state.currentBooking.time = action.payload.time
    },
    setServiceType: (state, action) => {
      state.currentBooking.serviceType = action.payload
    },
    setCustomerInfo: (state, action) => {
      state.currentBooking.customer = action.payload
    },
    clearBooking: (state) => {
      state.currentBooking = {
        device: null,
        repairs: [],
        date: null,
        time: null,
        serviceType: 'classic',
        customer: null,
        total: 0
      }
    }
  }
})

export const { 
  setDevice, 
  setRepairs, 
  setAppointmentDateTime, 
  setServiceType, 
  setCustomerInfo, 
  clearBooking 
} = appointmentsSlice.actions
export default appointmentsSlice.reducer